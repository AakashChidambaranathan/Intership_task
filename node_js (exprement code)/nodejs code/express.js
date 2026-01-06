const express=require('express')

const app=express();

app.use(express.json());
//create a simple server
// app.get('/',(req,res)=>{
//     res.send("hello this express")
// })

//create a mulitpel routes

// app.get('/',(req,res)=>{
//     res.send("this homw page")
// })

// app.get("/about",(req,res)=>{
//     res.send("this about")
// })

// app.get("/contact",(req,res)=>{
//     res.send("this contact page")
// })


//get data form json

// app.get('/user',(req,res)=>{
//     res.json({
//         "name":"aakash",
//         "email":"aakash@gamil.com"
//     })
// })

//Query Parameters
// app.get('/search',(req,res)=>{
//     const keywor=req.query.q;
//     res.send("this answer"+keywor);
// })

//userid paramater
// app.get('/user/:id',(req,res)=>{
//     const userid=req.params.id;
//     res.send("this use id:"+userid);
// })

//create a json file request

// app.post('/data',(req,res)=>{
//     const {name,email}=req.body;
//     res.send(`answer ${name} (${email})`)
// })


//middelware function

const logger=(req,res,next)=>{
    console.log(req.method,req.url)
    next();
}

app.use(logger);

app.get('/',(req,res)=>{
    res.send("this middelware")
});

app.listen(3000)