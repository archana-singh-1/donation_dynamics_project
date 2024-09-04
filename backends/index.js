import express from "express";
const PORT=process.env.PORT||40000

const app=express();

app.get("/",function(req,resp){
    resp.send("hello")
    
})

app.listen(PORT ,function(req,resp){
    console.log(`Server is running on ${PORT}`)
})