const express = require("express");
const { a } = require("framer-motion/client");
const fs = require("fs");
const { get } = require("http");
const path = require("path");
const { data } = require("react-router-dom");

const app = express();
app.use(express.json());

const data_dir = path.join(__dirname, "data");

if (!fs.existsSync(data_dir)) {
  fs.mkdirSync(data_dir);
}

app.post("/save-user", (req, res) => {
  const { userid, data } = req.body;
  const filePath = path.join(data_dir, `${userid}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.json({ message: "user data saved" });
});

app.listen(5000, () => console.log("server start"));