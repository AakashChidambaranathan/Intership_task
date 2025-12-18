const http= require("http");
const fs =require("fs");
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(500,{"content-type":"text/plain"});
        res.end(`this hime page`);
    }else if(req.url=="/about"){
        res.writeHead(404,{"content-type":"text/plain"});
        res.end(`this page is error`);
    }else if(req.url=="/video"){
        const videodata=fs.createReadStream("./simple_video.mp4")
        res.writeHead(200,{"content-type":"video/mp4"})
        videodata.pipe(res);
    }
})
server.listen(5000,()=>{
    console.log("server start:http://localhost:5000")
})