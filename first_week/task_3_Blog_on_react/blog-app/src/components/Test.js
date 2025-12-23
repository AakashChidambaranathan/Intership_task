const express = require("express");
const fs = require("fs");
const path = require("path");
const { useState } = require("react");
const { json } = require("stream/consumers");

const app = express();
app.use(express.json());

const DATA_DIR = path.join(__dirname, "data");

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR);
}

app.post("/AddBlog", (req, res) => {
  try{
    const { userId, data } = req.body;
  if (!userId || !data) {
    return res.status(400).json({ message: "Missing data" });
  }
  const filePath = path.join(DATA_DIR, `${userId}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.json({ message: "User data saved" })
  }catch(e){
    console.log(e);
  }
  const app=app.DATA_DIR("hi");
});
app.listen(5000, () => console.log("Server running on port 5000"));