const express = require('express');
const app = express();
const PORT = 1214;
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const flash = require('req-flash');
const csv = require("fast-csv");

//Konfigurasi Session Login
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'devacctoRPL',
    name: 'secretName',
    cookie: {
        sameSite: true,
        maxAge: 1*60*60*24*7*1000
    },
}));

// Definisikan views engine dan format penampil HTML
app.set('views', [
    path.join(__dirname, 'views'),
    path.join(__dirname, 'views/admin') // Menambahkan path untuk folder 'admin'
]);
app.set('view engine', 'ejs');

//Deklarasikan folder folder pendukung
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'modelController')));
app.use(express.static(path.join(__dirname, 'middleware')));
app.use(express.static(path.join(__dirname, 'configs')));
app.use(express.static(path.join(__dirname, 'routes')));

// Configurasi dan gunakan library
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(flash());

//HANDLE WITH CARE!
//==================================================================================================================

//Konfigurasi file path routing
const loginRoute = require('./routes/login-router');
const homeRoute = require('./routes/homepage-router');

//Konfigurasi routes yang telah di deklarasikan
app.use('/login', loginRoute);

app.use('/', homeRoute);

app.use(flash())

//==================================================================================================================

app.use(function(req, res, next) {
    res.setHeader('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.setHeader('Pragma', 'no-cache');
    next();
});

app.listen(PORT, () => {
    console.log('konek')
})