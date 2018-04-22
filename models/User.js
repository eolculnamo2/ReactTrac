var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var uri = 'mongodb://'+process.env.MONGO_ID+':'+process.env.MONGO_PASS+'@ds253889.mlab.com:'+process.env.MONGO_NUMBER+'/'+process.env.MONGO_DB

mongoose.connect(uri);
mongoose.connection.once('open',()=>{
    console.log("Connected to Mongo via Mongoose")
    }).on('error',(err)=>{
      console.log("Connection Error: " + err)
    });

var User = new Schema({
    username: String,
    password: String,
    email: String,
    authority: Boolean
})

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', User);
