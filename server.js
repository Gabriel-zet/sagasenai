const express = require("express");
const app = express();
const cors = require('cors');
const knex = require("./database/database")
const bcrypt = require('bcrypt');
const session = require('express-session')

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//Middleware
app.use(cors());
app.use(session({
    secret: 'sua-chave-secreta-aqui',
    resave: false,
    saveUninitialized: true,
  }));

//static
app.use(express.static('public'))

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
                        email: adm.email
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

app.listen(12345, () => {
    console.log("API RODANDO!");
});