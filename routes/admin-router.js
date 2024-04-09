//deklarasi route
const router = require('express').Router();
//deklarasi middleware
const verifyUser = require('../middleware/verify');
const { admin } = require('../modelController');

//?- TODO = Lo harus buat middleware checker for admin, kalo engga admin ga boleh akses
// router.get('/', verifyUser.isAdmin, homepageController.homepage);

router.get('/', verifyUser.isAdminLogin, admin.homepageAdmin);
router.get('/show', verifyUser.isAdminLogin, admin.showPresensi);
router.get('/export', verifyUser.isAdminLogin, admin.exportDataPresensi);
router.get('/scan', verifyUser.isAdminLogin, admin.scan);
router.get('/tambah-data', verifyUser.isAdminLogin, admin.pageTambahDataSiswa)
router.post('/api/send-data-scan', verifyUser.isAdminLogin, admin.APIScan);
router.post('/api/send-data-siswa', verifyUser.isAdminLogin, admin.APIAddDataSiswa);

module.exports = router 