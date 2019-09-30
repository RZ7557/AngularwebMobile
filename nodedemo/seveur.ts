import express from "express";
const app =express();
app.get('/', (req,res)=>{
    res.send("salut");

});

app.get('/kelheureestil', (req, res)=>{
    res.send(new Date());

});
app.listen(4201,()=>{
    console.log("le port est ouvert")
});