import Fooder from "./Fooder";
import { useState } from "react";
import bg from "../assets/8aacf9a38100f5eecdeb48cbde82eae9.jpg";
import lb from "./Labels";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";


function JobApplication() {
  const navigate = useNavigate();
  const [successOpen, setSuccessOpen] = useState(false);
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5005/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSuccessOpen(true);
      } else {
        console.error("Failed to submit application");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
    }
  };
  return (
    <div className="justify-content-center flex-wrap rounded-3">
      <div
        className="flex-grow-1 py-5"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${bg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row justify-content-center rounded-3">
            <div className="col-lg-7 col-md-10">
              <div
                className="card shadow-lg border-1"
                style={{
                  maxHeight: "75vh",
                  overflow: "scroll",
                  minWidth: "40",
                }}
              >
                <div className="card-body p-4 p-md-5">
                  <h4 className="fw-bold text-center text-primary mb-1">
                    Job Application
                  </h4>
                  <p className="text-center text-muted mb-4">
                    Fill in your details to apply for the position
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">{lb.Name}</label>
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
                        <label className="form-label">{lb.Email}</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">{lb.Date_of_Birth}</label>
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
                        <label className="form-label">{lb.Gender}</label>
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
                        <label className="form-label">{lb.City}</label>
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
                        <label className="form-label">{lb.Higher_edu}</label>
                        <input
                          type="text"
                          name="highest_education"
                          className="form-control"
                          value={formData.highest_education}
                          onChange={handleChange}
                        />
                    </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">
                          {lb.Graduation_Year}
                        </label>
                        <input
                          type="number"
                          name="graduation_year"
                          className="form-control"
                          placeholder="YYYY"
                          min="2020"
                          max={new Date().getFullYear() + 10}
                          value={formData.graduation_year}
                          onChange={handleChange}
                        />
                    </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">{lb.University}</label>
                      <input
                        type="text"
                        name="university"
                        className="form-control"
                        value={formData.university}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        {lb.Perferred_job_Role}
                      </label>
                      <select
                        name="role"
                        className="form-select"
                        value={formData.role}
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
                      <label className="form-label">{lb.Key_Skill}</label>
                      <textarea
                        name="key_skills"
                        rows="3"
                        className="form-control"
                        value={formData.key_skills}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">{lb.Linkedin_Like}</label>
                      <input
                        type="url"
                        name="linkedin_profile"
                        className="form-control"
                        value={formData.linkedin_profile}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="file"
                        className="form-control"
                        accept=".pdf"
                        onChange={(e) =>
                          setFormData((p) => ({
                            ...p,
                            resume_name: e.target.files[0]?.name || "",
                          }))
                        }
                      />
                      {formData.resume_name && (
                        <small className="text-success">
                          Selected: {formData.resume_name}
                        </small>
                      )}
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-primary btn-sm shadow"
                      >
                        Submit Application
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Popup
          open={successOpen}
          closeOnDocumentClick={false}
          overlayStyle={{ background: "rgba(0,0,0,0.3)" }}
          contentStyle={{
            position: "fixed",
            top: "210px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "60vh",
            maxWidth: "90vw",
            padding: "0",
            borderRadius: "10px",
            background: "#cfbbbbff",
          }}
        >
          <div className="text-center">
            <div
              className="d-flex justify-content-between align-items-center px-3 py-2"
              style={{ background: "#237befff", color: "white" }}
            >
              <span className="fw-bold">Success</span>
              <span
                style={{ cursor: "pointer", fontSize: "22px" }}
                onClick={() => {
                  setSuccessOpen(false);
                  const userid = localStorage.getItem("userid");
                  navigate("/profile/" + userid);
                }}
              >
                ×
              </span>
            </div>

            <div className="p-4">
              <p className="mb-0">Job Application Submitted Successfully</p>
            </div>

            <div className="border-top p-3 text-end">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setSuccessOpen(false);
                  const userid = localStorage.getItem("userid");
                  navigate("/profile/" + userid);
                }}
              >
                Go to Profile
              </button>
            </div>
          </div>
        </Popup>
      </div>
      <Fooder />
    </div>
  );
}
export default JobApplication;