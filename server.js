const express = require("express");
const app = express();
const cors = require('cors');
const knex = require("./database/database");
const bcrypt = require('bcrypt');
const session = require('express-session');
const jwt = require('jsonwebtoken');
const verificarToken = require('./middlewares/verificarToken'); // Importe o middleware

const jwtSecret = 'suaChaveSecretaJWT';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: 'chave-secreta-unicA$1@3',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 30000000 }
}));

app.use(cors({ origin: 'http://localhost:3000', credentials: true, exposedHeaders: ['Authorization'], }));
app.use(express.static('public'));


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

app.post('/admin/create', verificarToken, (req, res) => {

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
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await knex('users').where({ email }).first();

        if (user && bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });

            res.cookie('id', user.id)
            res.json({
                message: 'Login bem-sucedido!',
                isAdmin: false,
                token: token,
                user: {
                    id: user.id,
                    email: user.email,
                }

            });
        } else {
            res.status(401).json({ message: 'Credenciais inválidas' });
        }
    } catch (error) {
        console.error('Erro ao autenticar:', error);
        res.status(500).json({ message: 'Erro interno no servidor' });
    }
});

app.post('/admin/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await knex('admin').where({ email }).first();

        if (admin && bcrypt.compareSync(password, admin.password)) {
            const token = jwt.sign({ adminId: admin.id }, jwtSecret, { expiresIn: '1h' });

            res.json({
                message: 'Login bem-sucedido!',
                isAdmin: true,
                token: token,
                user: {
                    id: admin.id,
                    email: admin.email,
                }
            });
        } else {
            res.status(401).json({ message: 'Credenciais inválidas' });
        }
    } catch (error) {
        console.error('Erro ao autenticar:', error);
        res.status(500).json({ message: 'Erro interno no servidor' });
    }
});


app.post("/admin/criarCategoria", verificarToken, (req, res) => {
    const categoria = req.body.categoria;

    knex('categorias')
        .where({ nome: categoria })
        .first()
        .then(existingCategoria => {
            if (!existingCategoria) {
                return knex('categorias')
                    .insert({ nome: categoria })
                    .then(() => {
                        res.status(200).json({ message: 'Categoria criada com sucesso', isAdmin: true });
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

app.post("/admin/deletarCategoria", verificarToken, (req, res) => {
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

app.post("/admin/criarPost", verificarToken, (req, res) => {
    var title = req.body.title;
    var video = req.body.video;
    var data = req.body.data;
    var descricao = req.body.descricao;
    var instituicao = req.body.instituicao;
    var categoria = req.body.categoria;
    var ganhador = req.body.ganhador;
    var votos = req.body.votos;

    knex('posts')
        .where({ title: title })
        .first()
        .then(existingPost => {
            if (existingPost) {
                return res.status(400).json({ error: 'Já existe um post com este título.' });
            } else {
                return knex('posts')
                    .insert({
                        title: title,
                        video: video,
                        data: data,
                        descricao: descricao,
                        instituicao: instituicao,
                        categoria: categoria,
                        ganhador: ganhador,
                        votos: votos
                    })
                    .returning('*');
            }
        })
        .then(newPost => {
            res.status(201).json({ message: 'Post criado com sucesso', post: newPost[0] });
        })
        .catch(error => {
            console.error('Erro ao criar post:', error);
            res.status(500).json({ error: 'Erro interno do servidor ao criar post.' });
        });
});


app.get("/admin/listarPosts", (req, res) => {
    knex('posts')
        .select('*')
        .then(posts => {
            res.status(200).json({ posts });
        })
        .catch(error => {
            console.error('Erro ao listar posts:', error);
            res.status(500).json({ error: 'Erro interno do servidor ao listar posts.' });
        });
});

app.get('/user/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await knex('users').where({ id: userId }).first();
        console.log(user)
        if (user) {
            res.json({
                id: user.id,
                email: user.email,
                instituto: user.instituto,
                nome: user.nome,
            });
        } else {
            res.status(404).json({ message: 'Usuário não encontrado' });
        }
    } catch (error) {
        console.error('Erro ao obter informações do usuário:', error);
        res.status(500).json({ message: 'Erro interno no servidor' });
    }
});

app.get("/logout", (req, res) => {
    req.session.user = undefined
    res.redirect("/")
})

app.listen(12345, () => {
    console.log("API RODANDO!");
});

