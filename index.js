const express = require("express");
const app = express();
// mongodb://localhost:27017/
port = 2100;

const db=require ("./server/config/db")

app.use(express.urlencoded({extended:false}))
const routes = require("./server/routes/apiRoutes")
app.use("/apis",routes)
app.listen(port,()=>{
    console.log("server connected",port);
    
})