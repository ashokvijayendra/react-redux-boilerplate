var express = require('express');
var router = express.Router();

router.route('/npmPackage').get(require('./routes/npmPackage'));
router.route('/npmPackages').get(require('./routes/npmPackages'));
router.route('/product').get(require('./routes/product'));

module.exports = router;
