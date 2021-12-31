const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'First Web Node' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Page' });
});

router.get('/xmas_counter', (req, res) => {
  res.render('js_projects/xmas_counter', { title: 'Xmas Counter' });
});

router.get('/shopping_list', (req, res) => {
  res.render('js_projects/shopping_list', { title: 'Shopping List' });
});

module.exports = router;