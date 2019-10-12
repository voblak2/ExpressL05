var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
const models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/category', function(req, res, next) {
  models.category.findAll({}).then(categoryFound => {
    console.log(categoryFound);
    res.render('category', {
      category: categoryFound
    });
  }).catch(e => console.log(e));
});



module.exports = router;
