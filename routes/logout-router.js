const router = require('express').Router();
const {logout} = require('../modelController')
const verifyUser = require('../middleware/verify');

router.get('/api/send-logout', verifyUser.isLogin, logout.logout);

module.exports = router;