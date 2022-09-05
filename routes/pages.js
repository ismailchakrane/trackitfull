const express = require('express');
const authController = require('../controllers/auth');
const mysql = require("mysql");
const router = express.Router();
var hbs = require('hbs');
const { append } = require('express/lib/response');


const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

hbs.registerHelper('equals', function (v1,v2,options) {
  if (v1 === v2){
    return options.fn(this);
  }
});


hbs.registerHelper('nEquals', function (v1,v2,options) {
  if (v1 !== v2){
    return options.fn(this);
  }
});

hbs.registerHelper('slice', function (v1,v2,v3) {
  v1 += " ";
  let res = v1.slice(v2,v3);
  return res;
});


router.get('/', authController.isLoggedIn , (req, res) => {
  if( req.user ) {
    res.redirect('/profile');
  } else {
    res.render('login');
  }
});

router.get('/login', authController.isLoggedIn , (req, res) => {
  if( req.user ) {
    res.redirect('/profile');
  } else {
    res.render('login');
  }
});

//all categories
router.get('/profile', authController.isLoggedIn, (req, res) => {
  if( req.user ) {
    db.query('SELECT * FROM eservices WHERE CLIENT = ?', [req.user.id], async (error,result) => {
      if(! error){
        let orders = [];
        let beton = 0;
        let agglos = 0;
        let paves = 0;
        let plancher = 0;

        for (let i = 0; i < result.length; i++) {
          let newResult = {};
          let progress = {};

          // catégories
          if(result[i].ARTICLE === "béton") {
            beton++;
          } else if(result[i].ARTICLE === "agglos") {
            agglos++;
          } else if(result[i].ARTICLE === "pavés") {
            paves++;
          } else { 
            plancher++;
          }

          //status
          if (result[i].HEURE_ARRIVE != null){
            progress = { state: 3 };
          } else if(result[i].HEURE_SORTIE != null) {
            progress = { state: 2 };
          } else if(result[i].HEURE_VAL != null) {
            progress = { state: 1 };
          } else {
            progress = { state: 0 };
          }
          newResult = Object.assign(result[i],progress);
          orders.push(newResult);
        }

        res.render('profile', {
          data: orders,
          user: req.user,
          beton: beton,
          agglos: agglos,
          paves: paves,
          plancher: plancher
        });

      } else {
        console.log(error);
      }
    });
  } else {
    res.redirect('/login');
  }
  
});

// specific categories
router.get('/beton', authController.isLoggedIn, (req, res) => {
  if( req.user ) {
    db.query('SELECT * FROM eservices WHERE  CLIENT = ?', [req.user.id], async (error,result) => {
      if(! error){
        let orders = [];
        let beton = 0;
        let agglos = 0;
        let paves = 0;
        let plancher = 0;

        for (let i = 0; i < result.length; i++) {
          let newResult = {};
          let progress = {};

          // catégories
          if(result[i].ARTICLE === "béton") {
            beton++;
          } else if(result[i].ARTICLE === "agglos") {
            agglos++;
          } else if(result[i].ARTICLE === "pavés") {
            paves++;
          } else { 
            plancher++;
          }

          // status
          if (result[i].HEURE_ARRIVE != null){
            progress = { state: 3 };
          } else if(result[i].HEURE_SORTIE != null) {
            progress = { state: 2 };
          } else if(result[i].HEURE_VAL != null) {
            progress = { state: 1 };
          } else {
            progress = { state: 0 };
          }
          newResult = Object.assign(result[i],progress);

          // specific order
          if (result[i].ARTICLE === "béton") {
            orders.push(newResult);
          }
        }

      
        res.render('profile', {
          data: orders,
          user: req.user,
          beton: beton,
          agglos: agglos,
          paves: paves,
          plancher: plancher
        });

      } else {
        console.log(error);
      }
    });
  } else {
    res.redirect('/login');
  }
  
});

router.get('/plancher', authController.isLoggedIn, (req, res) => {
  if( req.user ) {
    db.query('SELECT * FROM eservices WHERE  CLIENT = ?', [req.user.id], async (error,result) => {
      if(! error){
        let orders = [];
        let beton = 0;
        let agglos = 0;
        let paves = 0;
        let plancher = 0;

        for (let i = 0; i < result.length; i++) {
          let newResult = {};
          let progress = {};

          // catégories
          if(result[i].ARTICLE === "béton") {
            beton++;
          } else if(result[i].ARTICLE === "agglos") {
            agglos++;
          } else if(result[i].ARTICLE === "pavés") {
            paves++;
          } else { 
            plancher++;
          }

          // status
          if (result[i].HEURE_ARRIVE != null){
            progress = { state: 3 };
          } else if(result[i].HEURE_SORTIE != null) {
            progress = { state: 2 };
          } else if(result[i].HEURE_VAL != null) {
            progress = { state: 1 };
          } else {
            progress = { state: 0 };
          }
          newResult = Object.assign(result[i],progress);

          // specific order
          if (result[i].ARTICLE === "plancher") {
            orders.push(newResult);
          }
        }

      
        res.render('profile', {
          data: orders,
          user: req.user,
          beton: beton,
          agglos: agglos,
          paves: paves,
          plancher: plancher
        });

      } else {
        console.log(error);
      }
    });
  } else {
    res.redirect('/login');
  }
  
});

router.get('/agglos', authController.isLoggedIn, (req, res) => {
  if( req.user ) {
    db.query('SELECT * FROM eservices WHERE  CLIENT = ?', [req.user.id], async (error,result) => {
      if(! error){
        let orders = [];
        let beton = 0;
        let agglos = 0;
        let paves = 0;
        let plancher = 0;

        for (let i = 0; i < result.length; i++) {
          let newResult = {};
          let progress = {};

          // catégories
          if(result[i].ARTICLE === "béton") {
            beton++;
          } else if(result[i].ARTICLE === "agglos") {
            agglos++;
          } else if(result[i].ARTICLE === "pavés") {
            paves++;
          } else { 
            plancher++;
          }

          // status
          if (result[i].HEURE_ARRIVE != null){
            progress = { state: 3 };
          } else if(result[i].HEURE_SORTIE != null) {
            progress = { state: 2 };
          } else if(result[i].HEURE_VAL != null) {
            progress = { state: 1 };
          } else {
            progress = { state: 0 };
          }
          newResult = Object.assign(result[i],progress);

          // specific order
          if (result[i].ARTICLE === "agglos") {
            orders.push(newResult);
          }
        }

      
        res.render('profile', {
          data: orders,
          user: req.user,
          beton: beton,
          agglos: agglos,
          paves: paves,
          plancher: plancher
        });

      } else {
        console.log(error);
      }
    });
  } else {
    res.redirect('/login');
  }
  
});

router.get('/paves', authController.isLoggedIn, (req, res) => {
  if( req.user ) {
    db.query('SELECT * FROM eservices WHERE  CLIENT = ?', [req.user.id], async (error,result) => {
      if(! error){
        let orders = [];
        let beton = 0;
        let agglos = 0;
        let paves = 0;
        let plancher = 0;

        for (let i = 0; i < result.length; i++) {
          let newResult = {};
          let progress = {};

          // catégories
          if(result[i].ARTICLE === "béton") {
            beton++;
          } else if(result[i].ARTICLE === "agglos") {
            agglos++;
          } else if(result[i].ARTICLE === "pavés") {
            paves++;
          } else { 
            plancher++;
          }

          // status
          if (result[i].HEURE_ARRIVE != null){
            progress = { state: 3 };
          } else if(result[i].HEURE_SORTIE != null) {
            progress = { state: 2 };
          } else if(result[i].HEURE_VAL != null) {
            progress = { state: 1 };
          } else {
            progress = { state: 0 };
          }
          newResult = Object.assign(result[i],progress);

          // specific order
          if (result[i].ARTICLE === "pavés") {
            orders.push(newResult);
          }
        }

      
        res.render('profile', {
          data: orders,
          user: req.user,
          beton: beton,
          agglos: agglos,
          paves: paves,
          plancher: plancher
        });

      } else {
        console.log(error);
      }
    });
  } else {
    res.redirect('/login');
  }
  
})


module.exports = router;