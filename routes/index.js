var express = require('express');
var index = express.Router();

/* GET home page. */
index.get('/', function(req, res, next) {
    res.render('index', { title: 'Baraa Project', user: 'Baraa' });
});

module.exports = index;