const express = require("express");
const app = express();
const cors = require('cors');
const knex = require("./database/database")
const bcrypt = require('bcrypt');
const session = require('express-session');
const adminAuth = require('./src/middlewares/adminAuth'); // Importe o middleware adminAuth

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: 'chave-secreta-unicA$1@3',
    resave: false,
    saveUninitialized: true,
}));
app.use(cors());
app.use(express.static('public'));
;  // Certifique-se de que adminAuth vem após a configuração do middleware de sessão.


app.get('/data', (req, res) => {

    res.json({ message: 'Dados da API aqui!' });
});

app.post('/users/create', (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    var nome = req.body.nome;
    var instituto = req.body.instituto;

    if (!instituto) {
        console.error('Campo instituto não pode estar vazio');
        return;
    }

    knex('users').where({ email: email }).first().then(user => {
        if (!user) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);

            return knex('users').insert({
                email: email,
                password: hash,
                nome: nome,
                instituto: instituto,
            });
        } else {
            res.redirect("users/cadastrar");
            return Promise.reject();
        }
    }).then(() => {
        res.redirect("/");
    }).catch((err) => {
        console.error(err);
        res.redirect("users/create");
    });
});

app.post('/admin/create', (req, res) => {

    var email = req.body.email;
    var password = req.body.password;
    var nome = req.body.nome;

    knex('admin').where({ email: email }).first().then(adm => {
        if (!adm) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);

            return knex('admin').insert({
                email: email,
                password: hash,
                nome: nome,
            });
        } else {
            return Promise.reject();
        }
    }).then((r) => {
        console.log(r)
    }).catch((err) => {
        console.error(err);
    });
});

app.post("/login", (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    knex('users')
        .where({ email: email })
        .first()
        .then(user => {
            if (user) {
                const correct = bcrypt.compareSync(password, user.password);

                if (correct) {
                    req.session.user = {
                        id: user.id,
                        email: user.email
                    };
                    res.json({ message: 'Login bem-sucedido!' });
                } else {
                    res.status(401).json({ message: 'Senha incorreta' });
                }
            } else {
                res.status(404).json({ message: 'Usuário não encontrado' });
            }
        })
        .catch(error => {
            console.error('Erro ao consultar o banco de dados:', error);
            res.status(500).json({ message: 'Erro interno no servidor' });
        });
});

app.post("/admin/login", (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    knex('admin')
        .where({ email: email })
        .first()
        .then(adm => {
            if (adm) {
                const correct = bcrypt.compareSync(password, adm.password);

                if (correct) {
                    req.session.adm = {
                        id: adm.id,
                        email: adm.email,
                        isAdmin: true,
                    };
                    res.json({ message: 'Login bem-sucedido!', isAdmin: true });
                } else {
                    res.status(401).json({ message: 'Senha incorreta' });
                }
            } else {
                res.status(404).json({ message: 'Usuário não encontrado' });
            }
        })
        .catch(error => {
            console.error('Erro ao consultar o banco de dados:', error);
            res.status(500).json({ message: 'Erro interno no servidor' });
        });
});



app.post("/admin/criarCategoria", (req, res) => {
    const categoria = req.body.categoria;

    knex('categorias')
        .where({ nome: categoria })
        .first()
        .then(existingCategoria => {
            if (!existingCategoria) {
                return knex('categorias')
                    .insert({ nome: categoria })
                    .then(() => {
                        res.status(200).json({ message: 'Categoria criada com sucesso' });
                    })
                    .catch(err => {
                        res.status(500).json({ message: 'Erro ao criar categoria', error: err });
                        console.warn('Erro ao criar categoria', err);
                    });
            } else {
                res.status(400).json({ message: 'Categoria já existe' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Erro ao verificar categoria existente', error: err });
            console.warn('Erro ao verificar categoria existente', err);
        });
});

app.post("/admin/deletarCategoria", (req, res) => {
    const categoria = req.body.categoria;

    knex('categorias')
        .where({ nome: categoria })
        .first()
        .then(existingCategoria => {
            if (existingCategoria) {
                return knex('categorias')
                    .where({ nome: categoria })
                    .del()
                    .then(() => {
                        res.status(200).json({ message: 'Categoria deletada com sucesso' });
                    })
                    .catch(err => {
                        res.status(500).json({ message: 'Erro ao deletar categoria', error: err });
                        console.warn('Erro ao deletar categoria', err);
                    });
            } else {
                res.status(400).json({ message: 'Categoria não encontrada para deletar' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Erro ao verificar categoria existente para deletar', error: err });
            console.warn('Erro ao verificar categoria existente para deletar', err);
        });
});

app.get("/admin/listarCategorias", (req, res) => {
    knex('categorias')
        .select('nome')  
        .then(categorias => {
            res.status(200).json({ categorias });
        })
        .catch(err => {
            res.status(500).json({ message: 'Erro ao listar categorias', error: err });
            console.warn('Erro ao listar categorias', err);
        });
});

app.listen(12345, () => {
    console.log("API RODANDO!");
});