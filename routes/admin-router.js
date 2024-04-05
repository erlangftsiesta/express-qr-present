//deklarasi route
const router = require('express').Router();
//deklarasi middleware
const verifyUser = require('../middleware/verify');
const { admin } = require('../modelController');

//?- TODO = Lo harus buat middleware checker for admin, kalo engga admin ga boleh akses
// router.get('/', verifyUser.isAdmin, homepageController.homepage);

router.get('/', verifyUser.isAdminLogin, admin.homepageAdmin);
router.get('/show', admin.showPresensi);
router.get('/export', verifyUser.isAdminLogin, admin.exportDataPresensi);
router.get('/scan', verifyUser.isAdminLogin, admin.scan);
router.post('/api/send', verifyUser.isAdminLogin, admin.APIScan);
// router.post('/api/send/tambah-data-siswa', admin.tambahSiswa);


module.exports = router 