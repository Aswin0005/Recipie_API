const express = require('express');
const router = express();
const {getAllRecepie,getRecipie} = require('../controller/getRecipie');

router.route('/').get(getRecipie);
router.route('/all').get(getAllRecepie)
// router.route('/create').post(newRecipie)

module.exports = router;
