const express = require('express'); // Include ExpressJS

const app = express(); // Create an ExpressJS app

const bodyParser = require('body-parser'); // middleware

const path = require("path");

const admin = {
    username: 'admin',
    password: 'admin'
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('styles'))
app.use(express.static('javascripts'))
app.use(express.static('images'))

// Route to Homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/paginaPrincipal.html');
    //res.render('paginaPrincipal.html');
});

// Route to Login Page
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login/static/login.html');
});

app.get('/carrinho', (req, res) => {
    res.sendFile(__dirname + '/carrinho.html');
});

app.post('/login', (req, res) => {
    // Insert Login Code Here
    let username = req.body.username;
    let password = req.body.password;
    /*
    if (username === admin.username && password === admin.password) {
        //res.send(`Bem vindo ${username}!`);
        res.redirect('/');
    } else {
        res.send('Incorrect Username or Password');
        res.redirect('/login');
    }*/
});

const port = 3000 // Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));