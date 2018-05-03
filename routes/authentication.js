var LocalStrategy = require('passport-local');
var mongoose = require('mongoose');
var session = require('express-session');
var bodyParser = require('body-parser')
var express = require('express');
var passport = require('passport');
var flash = require('connect-flash');
var router = express.Router();
var Strategy = require('passport-local').Strategy;

//models
var User = require('../models/User');

router.use(express.static('assets/dist'));

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
router.use(flash());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Register New User
router.post('/register', (req, res)=>{
  if(req.body.password === req.body.confirmPassword){
    User.register(new User({
                             username : req.body.username,
                             email: req.body.email,
                             authority: false,
                             }), req.body.password, (err, account)=>{
        if (err) {
            res.send(err)
        }
        else{
        passport.authenticate('local')(req, res, ()=>{
            res.send({name: 'authenticated'});
        });
        }
    });
  }
  else{
    res.send({name: "invalid-credentials"});
  }
});

//Login
router.post('/login', passport.authenticate('local'),(req, res)=>{
  if(req.user){
      res.send({
        name: 'authenticated',
        user: req.user
      });
  }
  else{
    res.send({
      name: 'invalid-credentials'
    });
  }
});

//Logout
router.get('/logout',(req,res)=>{
  req.logout();
  res.send({name: 'success'})
});

router.get('/checkLogin',(req,res)=>{
  if(req.user){
    res.json({name: 'authenticated', user: req.user})
  }
  else if(!req.user){
    res.json({name: 'Unauthenticated'})
  }
})

module.exports = router;
