var express = require('express');
const bookRouter= require('./book.api.js')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.status(200).send("Welcome to CoderSchool!")

});

router.use('/books',bookRouter)

module.exports = router;
