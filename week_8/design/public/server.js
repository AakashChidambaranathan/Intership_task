const express =require("express")
const fs=require("fs")
const cors=require("cors")
const console =require("console");
const { threadId } = require("worker_threads");
const { inertia } = require("framer-motion");
const { addAbortListener } = require("events");

const app=express();
app.use(cors())
app.use(express.json)
const JSON_FILE="data.json"
const TEXT_FILE="pipeline.txt"

app.post("/save",(req,res)=>{
  const formData=req.body;
  let data=[];
  if(fs.existsSync(JSON_FILE)){
    data=JSON.parse(fs.readFileSync(JSON_FILE))
  }
  data.push(formData);
  fs.writeFileSync(JSON_FILE,JSON.stringify(data,null,2))
  const textData=`Name:${formData.fill_name}
  Emile:${formData.Emile}
  Role:${formData.Role}
  Skills:${formData.key_skill}`
  fs.appendFileSync(TEXT_FILE, textData);
  res.json({message:"Data saved successfully"})
})
app.get("/Profiles",(res,req)=>{
  if(!fs.existsSync(JSON_FILE)){
    return res.json([])
  }
  const data=JSON.parse(fs.readFileSync(JSON_FILE));
  res.send(data)
})

app.apply(addAbortListener("/Profile",(req,res)=>{
  app.put(!fs/)
}))
app.listen(5000,()=>{
  console.log("Server running on http://localhost:5000")
})