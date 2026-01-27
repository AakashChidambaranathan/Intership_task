import Fooder from "./Fooder";
import { useState } from "react";
import bg from "../assets/8aacf9a38100f5eecdeb48cbde82eae9.jpg";

function JobApplication() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    date_of_birth: "",
    gender: "",
    nationality: "",
    city: "",
    country: "India",
    highest_education: "",
    university: "",
    graduation_year: "",
    role: "",
    key_skills: "",
    linkedin_profile: "",
    resume_name: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((p) => ({ ...p, resume_name: file.name }));
    }
  };
  return (
    <div className="min-vh-90 d-flex flex-column">
      <div
        className="flex-grow-1 py-5"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          overflowY: "scroll",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10">
              <div className="card shadow-lg border-0 rounded-4">
                <div className="card-body p-4 p-md-5">
                  <h4 className="fw-bold text-center text-primary mb-1">
                    Job Application
                  </h4>
                  <p className="text-center text-muted mb-4">
                    Fill in your details to apply for the position
                  </p>
                  <div className="mb-3">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="full_name"
                      className="form-control"
                      value={formData.full_name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email *</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Date of Birth</label>
                      <input
                        type="date"
                        name="date_of_birth"
                        className="form-control"
                        value={formData.date_of_birth}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Gender</label>
                      <select
                        name="gender"
                        className="form-select"
                        value={formData.gender}
                        onChange={handleChange}
                      >
                        <option value="">Select</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">City</label>
                      <input
                        type="text"
                        name="city"
                        className="form-control"
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Highest Education</label>
                      <input
                        type="text"
                        name="highest_education"
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Graduation Year</label>
                      <input
                        type="date"
                        name="graduation_year"
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">University / College</label>
                    <input
                      type="text"
                      name="university"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Preferred Job Role</label>
                    <select
                      name="role"
                      className="form-select"
                      onChange={handleChange}
                    >
                      <option value="">Select role</option>
                      <option>Frontend Developer</option>
                      <option>Backend Developer</option>
                      <option>Java Developer</option>
                      <option>UI/UX Designer</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Key Skills</label>
                    <textarea
                      name="key_skills"
                      rows="3"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">LinkedIn Profile</label>
                    <input
                      type="url"
                      name="linkedin_profile"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Upload Resume (PDF)</label>
                    <input
                      type="file"
                      className="form-control"
                      accept=".pdf"
                      onChange={handleFileChange}
                    />
                    {formData.resume_name && (
                      <small className="text-success">
                        Selected: {formData.resume_name}
                      </small>
                    )}
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary btn-sm shadow">
                      Submit Application
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Fooder />
    </div>
  );
}
export default JobApplication;
