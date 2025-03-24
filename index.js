const express = require("express");
const app = express();
port = 2000
app.listen(2000,()=>{
    console.log("server connected",2000);
})
app.get('/',(req,res)=>{
    res.send({
        status:200,
        success:true,
        name:"Paras Kumar"

    })
})
app.post('/post',(req,res)=>{
        res.json({
            status:200,
            success:true,
            college:"LKCTC"
        })
})
app.get('/get2',(req,res)=>{
    res.send({
        status:200,
        success:true,
        Hobby:"FITNESS"

    })
})
app.post('/post2',(req,res)=>{
    res.send({
        status:200,
        success:true,
        Course:"CSE"
    })
})
app.get('/get3',(req,res)=>{
    res.send({
        status:200,
        success:true,
        Technology:"Mern stack"
    })
})