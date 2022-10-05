const express = require('express')
const mongoose = require('mongoose')
const app = express();
const port =4000;

const user=require('./routers/user');


const url ='mongodb://localhost/MobileAppBackend'
mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on("open",()=>{
    console.log('MongoDB connected!');
})

app.use(express.json())
app.use('/User',user)

app.listen(port,(req,res)=>{
    console.log("express App Listeing on port 4000")
})