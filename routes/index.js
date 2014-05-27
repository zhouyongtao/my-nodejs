var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
   console.log("I'am irving! 时间: 2014年5月27日22:57:43 ");
  res.render('index', { title: 'Express' });
});

module.exports = router;
