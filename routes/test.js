/**
 * Created by ytzhou on 2014/5/28.
 */

var express = require('express');
var router = express.Router();

//add test code
router.get('/', function(req, res) {
    res.send('this is test code! ');
});

module.exports = router;
