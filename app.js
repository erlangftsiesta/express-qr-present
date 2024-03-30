//deklarasikan semua modul yang diperlukan
const express = require('express');
const app = express();
const PORT = 1214; //variable untuk menampung nilai alamat PORT
const path = require('path');
const bodyParser = require('body-parser');
const csv = require("fast-csv");
const session = require('express-session');
const flash = require('express-flash');

//Konfigurasi Session Login dan buat Cookies untuk menyimpan microdata
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'devacctoRPL',
    name: 'secretName',
    cookie: {
        sameSite: true,
        maxAge: 1*60*60*24*7*1000
    },
}));

//Konfigurasi pesan Flash (library flash)
app.use(flash())
app.use((req, res, next) => {
    res.locals.messages = req.flash();
    next();
});

// Definisikan view engine, folder views dan format penampil HTML
app.set('views', [
    path.join(__dirname, 'views'),
    path.join(__dirname, 'views/admin') // Menambahkan path untuk folder 'admin'
]);
app.set('view engine', 'ejs'); //view engine menggunakan EJS

//Deklarasikan folder folder pendukung
app.use(express.static(path.join(__dirname, '/public')));

// Configurasi dan gunakan library
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

//HANDLE WITH CARE!
//==================================================================================================================

//Konfigurasi file path routing
const loginRoute = require('./routes/login-router');
const appRoute = require('./routes/app-router')
const adminRoute = require('./routes/admin-router');

//Konfigurasi routes yang telah di deklarasikan
app.use('/login', loginRoute);
app.use('/admin', adminRoute);
app.use('/', appRoute);


//==================================================================================================================

//Jangan tanya, gua ga ngerti yang ini wkakakakkaka
app.use(function(req, res, next) {
    res.setHeader('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.setHeader('Pragma', 'no-cache');
    next();
});

//buat aplikasi menjalankan server di alamat PORT sesuai dengan variabel yang sudah di deklarasikan
app.listen(PORT, () => {
    console.log('konek')
})