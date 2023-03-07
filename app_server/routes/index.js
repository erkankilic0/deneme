var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.anaSayfa);
router.get('/iletisim',ctrlMain.iletisim);

module.exports = router;
