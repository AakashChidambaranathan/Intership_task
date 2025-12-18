const express=require("express")
const app=express();


app.get("/file",(req,res)=>{
    res.status(200).send("hello i working")
})
app.get("/", (req, res) => {
    res.send(`
    <h1>My Video</h1>
      <source src="/simple_video.mp4" type="video/mp4">
      Your browser does not support the video tag.
  `);
})
app.listen(5000,()=>{
    console.log("server start:http://localhost:5000")
})