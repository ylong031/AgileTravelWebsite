
/**
 * These are example routes for user management
 * This shows how to correctly structure your routes for the project
 */

const express = require("express");
const router = express.Router();



router.get('/home',async (req, res, next) => {
  res.render('homepage');
});

router.get('/country', async (req, res, next) => {
  res.render('individual-country-page');
});

router.get('/games',async (req, res, next) => {
  res.render('games-page');
});

router.get('/about', async (req, res, next) => {
  res.render('about-us-page');
});

router.get('/faq', async (req, res, next)=> {
  res.render('faq-page');
});
module.exports = router;
