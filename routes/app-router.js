//deklarasi route
const router = require('express').Router();
//deklarasi middleware
const verifyUser = require('../middleware/verify');

//deklarasikan variable dengan DESTRUCTURING ASSIGNMENT untuk mengambil method yang sudah diexport dari folder 'modelController'
const {homepage, profile} = require('../modelController')

//buat jalur routing
router.get('/', verifyUser.isLogin, homepage.homepage);
router.get('/profile', profile.profile);
router.post('/api/send-change-password', profile.changePassword)


//export semua konfigurasi agar bisa dibaca oleh file lain
module.exports = router;