import Fooder from "./Fooder";
import Popup from "reactjs-popup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/8aacf9a38100f5eecdeb48cbde82eae9.jpg";

function JobApplication() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    date_of_birth: "",
    gender: "",
    nationality: "",

    address: "",
    city: "",
    state: "",
    postal_code: "",
    country: "India",

    highest_education: "",
    university: "",
    graduation_year: "",
    field_of_study: "",
    cgpa_percentage: "",

    current_company: "",
    current_position: "",
    total_experience: "",
    current_salary: "",
    expected_salary: "",
    notice_period: "",

    position_applied: "",
    job_reference: "",
    available_from: "",
    preferred_work_mode: "Full-time",

    key_skills: "",
    languages_known: "",
    linkedin_profile: "",
    portfolio_url: "",
    resume_name: "",
    cover_letter_text: "",

    terms_accepted: false,
  });

  const [errors, setErrors] = useState({});
  const [successOpen, setSuccessOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        resume_name: file.name,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/job-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          application_id: `APP-${Date.now()}`,
          data: formData,
          submitted_at: new Date().toISOString(),
        }),
      });

      if (res.ok) {
        localStorage.setItem("applicant_email", formData.email);
        setSuccessOpen(true);
      }
    } catch (err) {
      console.error(err);
      setErrors((prev) => ({
        ...prev,
        submit: "Failed to submit application. Please try again.",
      }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      <div
        className="flex-grow-1 py-4"
        style={{
          background: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="card shadow border-0 rounded-3">
                <div className="card-body p-0">
                  <div
                    className="p-4 p-md-5"
                    style={{ maxHeight: "80vh", overflowY: "auto" }}
                  >
                    <h5 className="fw-bold text-primary text-center mb-4">
                      JOB APPLICATION
                    </h5>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3 row align-items-center">
                        <label className="col-sm-4 col-form-label fw-medium">
                          Full Name *
                        </label>
                        <div className="col-sm-8">
                          <input
                            type="text"
                            name="full_name"
                            className={`form-control ${errors.full_name ? "is-invalid" : ""}`}
                            value={formData.full_name}
                            onChange={handleChange}
                          />
                          {errors.full_name && (
                            <div className="invalid-feedback d-block">
                              {errors.full_name}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className=" ">
                        
                      </div>
                      <div className="mb-3 row align-items-center">
                        <label className="col-sm-4 col-form-label fw-medium">
                          Email Address *
                        </label>
                        <div className="col-sm-8">
                          <input
                            type="email"
                            name="email"
                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                            value={formData.email}
                            onChange={handleChange}
                          />
                          {errors.email && (
                            <div className="invalid-feedback d-block">
                              {errors.email}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="mb-3 row align-items-center">
                        <label className="col-sm-4 col-form-label fw-medium">
                          Date of Birth
                        </label>
                        <div className="col-sm-8">
                          <input
                            type="date"
                            name="date_of_birth"
                            className="form-control"
                            value={formData.date_of_birth}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="mb-3 row align-items-center">
                        <label className="col-sm-4 col-form-label fw-medium">
                          Gender
                        </label>
                        <div className="col-sm-8">
                          <select
                            name="gender"
                            className="form-select"
                            value={formData.gender}
                            onChange={handleChange}
                          >
                            <option value="">Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                            <option>Prefer not to say</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-3 row align-items-center">
                        <label className="col-sm-4 col-form-label fw-medium">
                          Nationality
                        </label>
                        <div className="col-sm-8">
                          <input
                            type="text"
                            name="nationality"
                            className="form-control"
                            value={formData.nationality}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="mb-3 row align-items-center">
                        <label className="col-sm-4 col-form-label fw-medium">
                          City
                        </label>
                        <div className="col-sm-8">
                          <input
                            type="text"
                            name="city"
                            className="form-control"
                            value={formData.city}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="mb-3 row align-items-center">
                        <label className="col-sm-4 col-form-label fw-medium">
                          Country
                        </label>
                        <div className="col-sm-8">
                          <input
                            type="text"
                            name="country"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="mb-3 row align-items-center">
                        <label className="col-sm-4 col-form-label fw-medium">
                          Highest Education *
                        </label>
                        <div className="col-sm-8">
                          <input type="text" className="form-control" />
                        </div>
                      </div>

                      <div className="mb-3 row align-items-center">
                        <label className="col-sm-4 col-form-label fw-medium">
                          University / College
                        </label>
                        <div className="col-sm-8">
                          <input
                            type="text"
                            name="university"
                            className="form-control"
                            value={formData.university}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="mb-3 row align-items-center">
                        <label className="col-sm-4 col-form-label fw-medium">
                          Field of Study
                        </label>
                        <div className="col-sm-8">
                          <input
                            type="text"
                            name="field_of_study"
                            className="form-control"
                            value={formData.field_of_study}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="mb-3 row align-items-center">
                        <label className="col-sm-4 col-form-label fw-medium">
                          Graduation Year
                        </label>
                        <div className="col-sm-8">
                          <input
                            type="number"
                            name="graduation_year"
                            className="form-control"
                            value={formData.graduation_year}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="mb-3 row align-items-center">
                        <label className="col-sm-4 col-form-label fw-medium">
                          Interest Role
                        </label>

                        <div className="col-sm-8">
                          <select name="role" className="form-select">
                            <option value="">Select Role</option>
                            <option value="Frontend Developer">
                              Frontend Developer
                            </option>
                            <option value="Backend Developer">
                              Backend Developer
                            </option>
                            <option value="Java Developer">
                              Java Developer
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="mb-3 row">
                        <label className="col-sm-4 col-form-label fw-medium">
                          Key Skills
                        </label>
                        <div className="col-sm-8">
                          <textarea
                            name="key_skills"
                            className="form-control"
                            rows="3"
                            value={formData.key_skills}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="mb-3 row align-items-center">
                        <label className="col-sm-4 col-form-label fw-medium">
                          LinkedIn Profile
                        </label>
                        <div className="col-sm-8">
                          <input
                            type="url"
                            name="linkedin_profile"
                            className="form-control"
                            value={formData.linkedin_profile}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="mb-4 row">
                        <label className="col-sm-4 col-form-label fw-medium">
                          Upload Resume *
                        </label>
                        <div className="col-sm-8">
                          <input
                            type="file"
                            className={`form-control ${errors.resume_name ? "is-invalid" : ""}`}
                            accept=".pdf"
                            onChange={handleFileChange}
                          />
                          {formData.resume_name && (
                            <small className="text-success">
                              Selected: {formData.resume_name}
                            </small>
                          )}
                          {errors.resume_name && (
                            <div className="invalid-feedback d-block">
                              {errors.resume_name}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="text-center mt-4">
                        <button className="btn btn-success px-5 py-2">
                          Submit
                        </button>
                      </div>
                    </form>
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
