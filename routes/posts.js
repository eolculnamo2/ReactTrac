var express = require('express')
var router = express.Router();
var bodyParser = require('body-parser');
var Category = require('../models/Category');
var Ticket = require('../models/Ticket');
var email = require('./mailer');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));


router.post('/newCategory',(req,res)=>{

})

router.post('/newTicket',(req,res)=>{
  console.log("...ticket")
  new Ticket({
    name: "String",
    assignedTo: "String",
    assignedBy: "String",
    priority: "String",
    createDate: "String",
    dueDate: "String",
    category: "String",
    status: "String",
    description: "String",
    comments: []
  }).save()
})



module.exports=router;
