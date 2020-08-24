var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var result=[
    {pid:1, pname:"华为", price:5588},
    {pid:2, pname:"苹果", price:8588},
    {pid:3, pname:"小米", price:3588},
  ];
  // res.writeHead(200,{
  //   "Access-Control-Allow-Origin":"http://127.0.0.1:5500"
  // });
  // res.write(JSON.stringify(result));
  // res.end();
  res.send(result);
});

module.exports = router;
