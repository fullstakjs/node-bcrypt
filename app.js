require('dotenv').config()
const express=require('express');
const body_parser=require('body-parser');

const app=express();
app.use(body_parser.json())

app.use("/",(req,res)=>{
    res.send("Hello from app")
})

const PORT= process.env.PORT;

app.listen(PORT,()=>{
    console.log("listening on port "+PORT);
})

