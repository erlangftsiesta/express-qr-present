const router = require('express').Router();
const loginController = require('../modelController').login;
const verifyUser = require('../middleware/verify');
const {postValidationRules} = require("../middleware/POSTvalidation");

router.get('/', verifyUser.isLogout, loginController.loginPage);
router.get('/logout', loginController.logout);
router.post('/auth', postValidationRules.isLoginPage(), loginController.loginAuth);

module.exports = router;