const express = require("express");
const app = express();
const cors = require('cors');
const knex = require("./database/database")
const bcrypt = require('bcrypt');

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//Middleware
app.use(cors());

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

    knex('users').where({ email: email }).first().then(user => {
        if (!user) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);

            return knex('users').insert({
                email: email,
                password: hash,
                nome: nome
            });
        } else {
            res.redirect("users/cadastrar");
            return Promise.reject();
        }
    }).then(() => {
        res.redirect("/")
    }).catch((err) => {
        console.error(err)
        res.redirect("users/create")
    })
})

app.get("/login", (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    knex('users')
        .where({ email: email })
        .first() // Para obter apenas o primeiro resultado
        .then(user => {
            if (user) { // Se existe um usuário com esse email
                // Validar senha
                const correct = bcrypt.compareSync(password, user.password);

                if (correct) {
                    req.session.user = {
                        id: user.id,
                        email: user.email
                    };
                    res.redirect('/');
                } else {
                    res.redirect('/login');
                }
            } else {
                res.redirect('/login');
            }
        })
        .catch(error => {
            console.error('Erro ao consultar o banco de dados:', error);
            res.redirect('/login');
        });
})


app.listen(12345, () => {
    console.log("API RODANDO!");
});