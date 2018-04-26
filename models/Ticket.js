var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var uri = 'mongodb://'+process.env.MONGO_ID+':'+process.env.MONGO_PASS+'@ds253889.mlab.com:'+process.env.MONGO_NUMBER+'/'+process.env.MONGO_DB

mongoose.connect(uri);
mongoose.connection.once('open',()=>{
    console.log("Connected to Mongo via Mongoose")
    }).on('error',(err)=>{
      console.log("Connection Error: " + err)
    });

var Ticket = new Schema({
    name: String,
    assignedTo: String,
    assignedBy: String,
    assignedByID: String,
    priority: String,
    createDate: String,
    dueDate: String,
    category: String,
    status: String,
    description: String,
    comments: Array
})

/*
Comment data example
{
  author: "Bre",
  timestamp:"JStimestamp",
  status: "Open",
  comment: "I think Hello WORLD! would be better"
}
*/

module.exports = mongoose.model('tickets', Ticket);
