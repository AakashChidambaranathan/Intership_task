const express=require('express');
const cors=require('cors')
const fs=require('fs');
const app=express();
app.use(cors());
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("this home page")
})
app.post('/user',async(req,res)=>{
    try{
        const {name,email}=req.body;
        if(!name||!email){
            return res.status(400).send("this have error")
        }
        const data=await fs.readFile("users.json","utf-8")
        const users=JSON.parse(data)
        const newUser={
            name,email
        }
        users.push(newUser)
        await fs.writeFile("users.json",JSON.stringify('users',null,2))
        res.send("data is store")
    }catch(err){
        res.send("this have error")
    }    
})

app.get('/users',(req,res)=>{
    try{
        const data=fs.readFile('user.json',"utf-8")
        const used=JSON.parse(data)
        res.json(used)
    }catch(err){
        res.send("this have the error")
    }
})
app.listen(3000)