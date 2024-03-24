const router = require('express').Router();
const homepageController = require('../modelController').homepage;
const verifyUser = require('../middleware/verify');

router.get('/', verifyUser.isLogin, homepageController.homepage);

module.exports = router