const mongoose=require('mongoose')

mongoose.connect(process.env.MONGODB_URL,{ useUnifiedTopology: true,useNewUrlParser: true },(err)=>{
    if(err){
        console.log(error);
    }
    else{
        console.log("conected to mongo ........");
    }
})

module.exports=mongoose;