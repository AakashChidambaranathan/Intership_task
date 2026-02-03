const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const { default: JobApplication } = require("../src/components/JobApplication");
const app = express();
const PORT = 5005;
app.use(cors());
app.use(express.json());
const jsonDir = path.join(__dirname, "JsonData");
const pipelineDir = path.join(__dirname, "Pipeline");
[jsonDir, pipelineDir].forEach((dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});
const safeFileName = (name) => name.toLowerCase().replace(/[^a-z0-9]/g, "_");
app.post("/save", (req, res) => {
  try {
    const { full_name, email } = req.body;
    if (!full_name || !email) {
      return res.status(400).json({
        error: "Full name and email are required",
      });
    }
    const fileName = safeFileName(full_name);
    const jsonPath = path.join(jsonDir, `${fileName}.json`);
    const txtPath = path.join(pipelineDir, `${fileName}.txt`);
    const data = { ...req.body };
    fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
    fs.appendFileSync(txtPath, Object.values(data).join("|") + "\n");
    res.json({
      message: "Job application saved successfully",
      userId: fileName,
    });
  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json({ error: "Failed to save application" });
  }
});
app.post("/profile", (req, res) => {
  try {
    const files = fs.readdirSync(jsonDir);
    const profiles = files
      .filter((f) => f.endsWith(".json"))
      .map((f) => JSON.parse(fs.readFileSync(path.join(jsonDir, f), "utf-8")));
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ error: "Failed to read profiles" });
  }
});
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`),
);