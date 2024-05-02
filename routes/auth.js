const express = require('express')
const router = express();

const {login,register} = require('../controller/auth')

router.post('/register',register);
router.post('/login',login)

module.exports = router;

