require('dotenv').config()
const express=require('express');
const body_parser=require('body-parser');
const logger_route=require('./controllers/user_controller');
const db=require('./db')

const app=express();
app.use(body_parser.json())

app.use('/api',logger_route)

const PORT= process.env.PORT;

app.listen(PORT,()=>{
    console.log("listening on port "+PORT);
})

