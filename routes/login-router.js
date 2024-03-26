const router = require('express').Router();
const loginController = require('../modelController').login;
const verifyUser = require('../middleware/verify');

router.get('/', verifyUser.isLogout, loginController.loginPage);
router.get('/logout', loginController.logout);
router.post('/auth', loginController.loginAuth);

module.exports = router;