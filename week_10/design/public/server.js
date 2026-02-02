const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());
const jsonDir = path.join(__dirname, "JsonData");
const pipelineDir = path.join(__dirname, "Pipeline");
if (!fs.existsSync(jsonDir)) fs.mkdirSync(jsonDir);
if (!fs.existsSync(pipelineDir)) fs.mkdirSync(pipelineDir);
const safeFileName = (name) => name.replace(/[^a-zA-Z0-9]/g, "_");
app.post("/save", (req, res) => {
  try {
    const {
      full_name,
      email,
      date_of_birth,
      gender,
      nationality,
      city,
      country,
      highest_education,
      university,
      graduation_year,
      role,
      key_skills,
    } = req.body;

    if (!full_name || !email) {
      return res
        .status(400)
        .json({ error: "Full name and email are required" });
    }

    const fileName = safeFileName(full_name);
    const jsonFile = path.join(jsonDir, `${fileName}.json`);
    const txtFile = path.join(pipelineDir, `${fileName}.txt`);
    const jsonData = {
      full_name,
      email,
      date_of_birth,
      gender,
      nationality,
      city,
      country,
      highest_education,
      university,
      graduation_year,
      role,
      key_skills,
    };
    fs.writeFileSync(jsonFile, JSON.stringify(jsonData, null, 2));
    const pipeData =
      [
        full_name,
        email,
        date_of_birth,
        gender,
        nationality,
        city,
        country,
        highest_education,
        university,
        graduation_year,
        role,
        key_skills,
      ].join("|") + "\n";
    fs.appendFileSync(txtFile, pipeData);
    res.json({
      message: "Job application saved successfully",
      userId: fileName,
    });
  } catch (err) {
    console.error("SAVE ERROR:", err);
    res.status(500).json({ error: "Failed to save job application" });
  }
});
app.get("/profile/:name", (req, res) => {
  try {
    const fileName = safeFileName(req.params.name);
    const jsonFile = path.join(jsonDir, `${fileName}.json`);
    if (!fs.existsSync(jsonFile)) {
      return res.status(404).json({ error: "Profile not found" });
    }
    const data = JSON.parse(fs.readFileSync(jsonFile, "utf-8"));
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to read profile" });
  }
});
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
