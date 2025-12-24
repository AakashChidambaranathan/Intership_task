const express=require('express')
const fs=require('fs')

const app=express();
app.use(express.json)

const read=()=>{

    fs.readFileSync('data.json',"utf-8",(err,data)=>{
        if(err){
            return res.status(200).send("this have a error")
        }
    })
}

const write=()=>{
    
    fs.writeFileSync('data.txt',)
}