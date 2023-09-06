
/**
 * These are example routes for user management
 * This shows how to correctly structure your routes for the project
 */

const express = require("express");
const router = express.Router();
const bodyParser= require ("body-parser");
const moment = require("moment")
const path = require('path');
router.use(bodyParser.urlencoded({ extended: true }));



router.get('/home',async (req, res, next) => {
  res.render('homepage');
});


router.get('/country/france', async (req, res, next) => {
  res.render('France');
});
router.get('/country/mexico', async (req, res, next) => {
  res.render('Mexico');
});
router.get('/country/uk', async (req, res, next) => {
  res.render('Uk');
});
router.get('/country/thailand', async (req, res, next) => {
  res.render('Thailand');
});

router.get('/country/turkey', async (req, res, next) => {
  res.render('Turkey');
});

router.get('/country/italy', async (req, res, next) => {
  res.render('Italy');
});
router.get('/country/china', async (req, res, next) => {
  res.render('China');
});
router.get('/country/spain', async (req, res, next) => {
  res.render('Spain');
});
router.get('/country/usa', async (req, res, next) => {
  res.render('Usa');
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

router.use(express.static('resource'));
router.get('/home2', (req,res) => {
  res.render('user-story-page.ejs')
})

router.get('/generate-page' ,(req,res)=>{
  const bodyValue = req.query.button
  db.all("SELECT * FROM Stories where country=?",[bodyValue],function(err,row){
    if(err){
      console.log(err)
    }
    else{
      res.render('individual-story-page.ejs', {data:row,country:bodyValue})
    }
  })
  
})
router.get('/go-to-create', (req,res)=>{
  const bodyValue = req.query.button
  res.render('create-user-story.ejs',{country:bodyValue})
})

router.post('/add-story', (req,res) =>{
  const bodyValue = req.body.button
  const title = req.body.title
  const body = req.body.body
  const name = req.body.name
  const timestamp = moment();
  const timestamp2 = timestamp.format('YYYY-MM-DD HH:mm:ss')
  db.all('INSERT INTO Stories(title,user,body,timestamp,country) VALUES(?,?,?,?,?)', [title,name,body,timestamp2,bodyValue], function(err){
    if(err){
      console.log(err)
    }
    else{
      res.redirect('home2')
    }
  })
})

router.get('/MexicoNovel', async (req, res, next)=> {
  res.render('MexicoNovel');
});
router.get('/ItalyNovel', async (req, res, next)=> {
  res.render('ItalyNovel');
});
router.get('/ChinaNovel', async (req, res, next)=> {
  res.render('ChinaNovel');
});
router.get('/SpainNovel', async (req, res, next)=> {
  res.render('SpainNovel');
});

router.get('/ThaiNovel', async (req, res, next)=> {
  res.render('ThaiNovel');
});
router.get('/TurkeyNovel', async (req, res, next)=> {
  res.render('TurkeyNovel');
});

router.get('/WildfireNovel', async (req, res, next)=> {
  res.render('WildfireNovel');
});
module.exports = router;
