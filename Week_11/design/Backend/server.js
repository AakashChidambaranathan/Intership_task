const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const JSON_FILE = path.join(__dirname, "applications.json");
const TEXT_FILE = path.join(__dirname, "applications.txt");
function readJSONFile() {
  if (!fs.existsSync(JSON_FILE)) {
    return [];
  }
  const data = fs.readFileSync(JSON_FILE, "utf-8");
  return data ? JSON.parse(data) : [];
}
function writeJSONFile(data) {
  fs.writeFileSync(JSON_FILE, JSON.stringify(data, null, 2));
}
app.post("/save", (req, res) => {
  const application = req.body;
  const applications = readJSONFile();
  applications.push(application);

  writeJSONFile(applications);
  const textData = `
-----------------------------
Name: ${application.full_name}
Email: ${application.email}
DOB: ${application.date_of_birth}
Gender: ${application.gender}
City: ${application.city}
Education: ${application.highest_education}
University: ${application.university}
Graduation Year: ${application.graduation_year}
Role: ${application.role}
Skills: ${application.key_skills}
LinkedIn: ${application.linkedin_profile}
Resume: ${application.resume_name}
-----------------------------   
`;
  fs.appendFileSync(TEXT_FILE, textData);
  res.status(200).json({ message: "Application saved successfully" });
});
app.get("/profile", (req, res) => {
  const applications = readJSONFile();
  res.json(applications);
});
app.listen(5005, () => {
  console.log("Server running on http://localhost:5005");
});