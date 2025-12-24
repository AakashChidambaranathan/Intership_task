const express=require('express')


const app=express();
app.use(express.json())
//create data on json
let students=[
    {
        "id":1,
        "name":"student1",
        "email":"stident@gmail.com",
        "phone":"+91 234567876"
    },{
        "id":2,
        "name":"student2",
        "email":"student2@gmail.com",
        "phone":"+91n45678765"
    }
];
//start work on crud opreation
app.get("/student",(req,res)=>{
    res.json(students);
})
app.get("/student/:id",(req,res)=>{
    const student=students.find(s=>s.id===parseInt(req.params.id))
    if(!student){
        return res.status(404).send("this not found")
    }
    res.json(student);
})
app.post("/student",(req,res)=>{
    const newStudent={
        id:req.body.id,
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone
    }
    students.push(newStudent);
    res.status(201).json(newStudent)
})

app.put("/student/:id", (req, res) => {
    const index = students.find(
        s => s.id === parseInt(req.params.id)
    );
    if (index === -1) {
        return res.status(404).send("Student not found");
    }
    students[index] = { ...students[index], ...req.body };
    res.json(students[index]);
});
app.delete("student/:id",(req,res)=>{
    const index=students.findIndex(s=>s.id === parseInt(req.params.id))
    students.splice(index,1);
    res.send("data is delect ")
})
app.listen(3000,()=>{
    console.log("server start at http://localhost/3000")
})
