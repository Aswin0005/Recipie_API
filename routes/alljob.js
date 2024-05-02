const express = require('express');
const router = express();

const allPost = require('../controller/allpost')

router.route('/all').get(allPost)

module.exports = router;