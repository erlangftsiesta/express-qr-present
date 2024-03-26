//deklarasi route
const router = require('express').Router();
//deklarasi middleware
const verifyUser = require('../middleware/verify');

//deklarasikan variable untuk mengambil method yang sudah diexport dari folder 'modelController'
const homepageController = require('../modelController').homepage;
const profileController = require('../modelController').profile;

//buat jalur routing
router.get('/', verifyUser.isLogin, homepageController.homepage);
// router.get('/profile', verifyUser.isLogin, profileController.profile);
router.get('/profile', profileController.profile);

//export semua konfigurasi agar bisa dibaca oleh file lain
module.exports = router;