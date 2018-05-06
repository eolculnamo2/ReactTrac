var mailer = require('./mailer');
var express = require('express')
var router = express.Router();
var bodyParser = require('body-parser');
var User = require('../models/User');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.post('/welcomeUser',(req,res)=>{
    mailer.welcomeUser(req.body.email);
});

router.post('/ticketUpdate',(req,res)=>{
  var recipient = req.body.assignedTo;
  User.findOne({username: recipient},(err,info)=>{
    mailer.ticketUpdate(info.email);
  });
});

module.exports=router;
