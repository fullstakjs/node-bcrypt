const mongoose= require('mongoose');
const Logger=mongoose.model("User",{
    username: {type:String},
    email:{type:String},
    password: {type:String},
    verifyPass: {type:String}
})

module.exports=Logger;