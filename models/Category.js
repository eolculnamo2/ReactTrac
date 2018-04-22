var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var uri = 'mongodb://'+process.env.MONGO_ID+':'+process.env.MONGO_PASS+'@ds253889.mlab.com:'+process.env.MONGO_NUMBER+'/'+process.env.MONGO_DB

mongoose.connect(uri);
mongoose.connection.once('open',()=>{
    console.log("Connected to Mongo via Mongoose")
    }).on('error',(err)=>{
      console.log("Connection Error: " + err)
    });

var Category = new Schema({
    name: String
})

module.exports = mongoose.model('categories', Category);
