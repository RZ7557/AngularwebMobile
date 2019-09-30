import express from "express";
const app =express();
app.get('/', (req,res)=>{
    res.send("salut");

});
app.listen(4201,()=>{
    console.log("le port est ouvert")
});