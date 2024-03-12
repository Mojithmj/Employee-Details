const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/Factory');
var db=mongoose.connection;
db.on('error',console.error.bind('error'));
db.once('open',()=>{
console.log('Connection Succesfull');
});

module.exports=db
