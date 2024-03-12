const express=require('express');
const app=express();
const db=require('./Dbconnection');
const bodyparser=require('body-parser');
app.use(bodyparser.json());
const cors =require('cors');
app.use(cors());

const router=require('./Routes/routes');
app.use('/',router)

app.listen(4000,()=>{
    console.log('Port created');
})