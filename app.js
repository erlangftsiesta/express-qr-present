const express = require('express');
const app = express();
const PORT = 1214;
const path = require('path');
const authMiddleware = require('./middlewares/authMiddleware');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const flash = require('req-flash');
const csv = require("fast-csv");

// Definisikan views engine dan format penampil HTML
app.set('views', [
    path.join(__dirname, 'views'),
    path.join(__dirname, 'views', 'admin') // Menambahkan path untuk folder 'admin'
]);
app.set('view engine', 'ejs');

//Deklarasikan folder folder pendukung
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'modelController')));
app.use(express.static(path.join(__dirname, 'modelController/data')));
app.use(express.static(path.join(__dirname, 'middleware')));
app.use(express.static(path.join(__dirname, 'configs')));
app.use(express.static(path.join(__dirname, 'routes')));

// Configurasi dan gunakan library
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(flash());
app.use(authMiddleware);

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

app.listen(PORT, () => {
    console.log('konek')
})