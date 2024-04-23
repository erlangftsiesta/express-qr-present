const router = require('express').Router();
const {login} = require('../modelController');
const verifyUser = require('../middleware/verify');

router.get('/', verifyUser.isLogout, login.loginPage);
router.post('/api/send-login', verifyUser.isLogout, login.loginAuth);

module.exports = router;