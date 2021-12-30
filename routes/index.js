const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'First Web Node' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Page' });
});

router.get('/xmas_counter', (req, res) => {
  res.render('xmas_counter/xmas_counter', { title: 'Contact Page' });
});


module.exports = router;