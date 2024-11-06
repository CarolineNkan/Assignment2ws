var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Homepage',
    
   });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Homepage',
    
   });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { 
    title: 'About Me',
    
   });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { 
    title: 'My Projects',
    
   });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { 
    title: 'Contact Me',
    
   });
});




module.exports = router;