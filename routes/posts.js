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
  console.log(JSON.stringify(req.user))
  var submission = req.body;
  var timestamp;

  var d = new Date();
  //timestamp broke... see DB
  timestamp = d.getFullYear()+"/"+d.getMonth()+"/"+d.getDay()+" "+d.getHours()+":"+d.getMinutes();

  new Ticket({
    name: submission.name,
    assignedTo: submission.assignedTo,
    assignedBy: "req.user.username",
    assignedByID: "req.user.id",
    priority: submission.priority,
    createDate: timestamp,
    dueDate: submission.dueDate,
    category: submission.category,
    status: submission.status,
    description: submission.description,
    comments: []
  }).save()
})



module.exports=router;
