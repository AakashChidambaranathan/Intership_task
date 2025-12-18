const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());

const DATA_DIR = path.join(__dirname, "data");

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR);
}

app.post("/save-user", (req, res) => {
  const { userId, data } = req.body;

  if (!userId || !data) {
    return res.status(400).json({ message: "Missing data" });
  }

  const filePath = path.join(DATA_DIR, `${userId}.json`);

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  res.json({ message: "User data saved" });
});

app.listen(5000, () => console.log("Server running on port 5000"));