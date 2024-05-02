const express = require('express');
const router = express();
const {newRecipie,getRecipie} = require('../controller/getRecipie');

router.route('/').get(getRecipie);
// router.route('/create').post(newRecipie)

module.exports = router;
