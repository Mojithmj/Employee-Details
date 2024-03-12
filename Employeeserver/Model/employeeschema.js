const mongoose=require('mongoose');
const employ=new mongoose.Schema ({
    name:String,
    age:Number,
    place:{
        type:String,
        unique:true,
        required:true,
        dropDups: true
}
})
module.exports= mongoose.model('Employee',employ);