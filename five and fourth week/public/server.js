const fs = require("fs");
const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const data_dir = path.join(__dirname, "data");
const text_dir = path.join(__dirname, "textdata");

if (!fs.existsSync(data_dir)) {
  fs.mkdirSync(data_dir, { recursive: true });
}

if (!fs.existsSync(text_dir)) {
  fs.mkdirSync(text_dir, { recursive: true });
}

app.post("/save-user", (req, res) => {
  const { userid, data } = req.body;

  const jsonPath = path.join(data_dir, `${userid}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));

  let textContent = `User ID : ${userid}\n`;
  for (let key in data) {
    textContent += `${key} : ${data[key]}\n`;
  }

  const txtPath = path.join(text_dir, `${userid}.txt`);
  fs.writeFileSync(txtPath, textContent);

  res.json({ message: "User data saved successfully" });
});

app.get("/get-user/:userid", (req, res) => {
  const { userid } = req.params;
  const filePath = path.join(data_dir, `${userid}.json`);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: "User not found" });
  }

  const fileData = fs.readFileSync(filePath, "utf-8");
  res.json(JSON.parse(fileData));
});

// GET TEXT FILE
app.get("/get-text/:userid", (req, res) => {
  const { userid } = req.params;
  const filePath = path.join(text_dir, `${userid}.txt`);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: "Text file not found" });
  }

  res.sendFile(filePath);
});

app.listen(500, () => {
  console.log("Server running on http://localhost:5000");
});
