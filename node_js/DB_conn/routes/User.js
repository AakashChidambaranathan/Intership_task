const express=require("express");
const routes=express.Router();
const User=require("../modul/User.js")

routes.post('/', async (req, res) => {
    const user = new User(req.body);
    const saved = await user.save();
    res.json(saved);
});

routes.get('/',async (req,res)=>{
    const user=await User.find();
    res.json(user);
})

routes.put('/:id', async (req, res) => {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});

// Delete
routes.delete('/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
});
module.exports=routes