var express = require('express');
var router = express.Router();
var request = require("request");

function getPackage(productID, cb) {

  var registryUrl = 'https://api.myjson.com/bins/4x7az';
  var url = [registryUrl, productID].join('/');
  request(registryUrl, function (error, response, body) {
    cb(error, response, body)
  });
}

router.get('/', function(req, res) {
  var productID = req.query['productID'] || '';
  getPackage(productID, function (error, response, body) {

    if (error) {
      console.log("We’ve encountered an error: " + error);
    }
    res.json(JSON.parse(body))
  })

});

module.exports = router;
