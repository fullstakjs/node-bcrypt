const Logger=require('../model/user');
const express=require('express');
const bcrypt=require('bcrypt');
const logger_route=express.Router();

logger_route.get('/signup',async(req,res)=>{
    const users=await Logger.find()
    res.send(users)
})

// login route code 
logger_route.post("/signin",(req,res)=>{

})

// signup route 
logger_route.post('/signup',async(req,res)=>{
    const {username,email,password, verifyPass}=req.body;
    try {
        if(!email || !username || !password){
            res.status(400).send({message: "All fields must be filled"})
        }
       const user= await Logger.findOne({email});
       
       if(password !==verifyPass){
           res.send("Passoword not matching")
       }

       const salt=10;
       const hashedPass= await bcrypt.hash(password,salt);

       const usr= new Logger({
           username,
           email,
           password:hashedPass
       })
       if(user){
        res.send("User alresdy exists");
      }else{
        await usr.save()
      }


      console.log(usr);
      res.send(usr)

    } catch (error) {
        console.error(error);
        res.send(error)
    }
    
    

})


module.exports=logger_route;