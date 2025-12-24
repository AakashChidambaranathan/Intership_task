const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json);

app.get("/", (req, res) => {
  res.send("this wink");
});

app.post("/write", (req, res) => {
  const message = req.body.message;
  fs.writeFile("data.text", message, (err) => {
    if (err) {
      return res.status(500).send("data is store");
    }
    res.send("data is store");
  });
});

app.get("/read", (req, res) => {
  fs.readFile("./text.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Cannot read file");
    }
    res.send(data);
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
