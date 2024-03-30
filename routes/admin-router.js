//deklarasi route
const router = require('express').Router();
//deklarasi middleware
const verifyUser = require('../middleware/verify');
const { admin } = require('../modelController');

//?- TODO = Lo harus buat middleware checker for admin, kalo engga admin ga boleh akses
// router.get('/', verifyUser.isAdmin, homepageController.homepage);

router.get('/', admin.homepage);
router.get('/scan', admin.scan);
router.post('/api/send', admin.APIScan);
router.get('/show', admin.showPresensi);

module.exports = router