const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send({Name:'Sheet 1'}) 
})
app.get('/posts',(req,res)=>{
    res.send({Name:'Sheet 1'}) 
})
app.listen(port,()=>{
    console.log('server started')
})