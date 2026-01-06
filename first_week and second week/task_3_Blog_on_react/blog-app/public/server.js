const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/submit", (req, res) => {
  const filePath = path.join(__dirname,"data",`${Object.values(req.body)[0]}.json`);
  fs.writeFile(filePath, JSON.stringify(req.body, null, 5), (err) => {
    if (err) {
      return res.status(500).json({ message:"error on saving"});
    }
    res.json({ message:"data done"});
  });
});
console.log("this is nodemon")
app.listen(5000, () => {
  console.log(`server at http://localhost:5000`);
});