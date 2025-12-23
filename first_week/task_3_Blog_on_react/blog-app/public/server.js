const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

app.post("/submit", (req, res) => {
  const { name, email, phone, title, overviews, f_author, address, father, mother } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Name required" });
  }
  const userData = { name, email, phone, title, overviews, f_author, address, father, mother };
  const filePath = path.join(__dirname, `${name}.json`);
  fs.writeFile(filePath, JSON.stringify(userData, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ message: "Error saving file" });
    }
    res.json({ message: "Data saved successfully" });
  });
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:5000`);
});
