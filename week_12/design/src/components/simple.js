import Fooder from "./Fooder";
import Popup from "reactjs-popup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/social-media-business-concept-with-wooden-blocks-notebook-glasses-pen-keyboard-white-background-flat-lay.jpg";

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
  const countries = [
    "India",
    "USA",
    "UK",
    "Canada",
    "Australia",
    "Germany",
    "Other",
  ];
  const educationLevels = [
    "High School",
    "Diploma",
    "Bachelor's Degree",
    "Master's Degree",
    "PhD",
    "Other",
  ];
  const experienceYears = [
    "Fresher",
    "Less than 1 year",
    "1-2 years",
    "3-5 years",
    "5-8 years",
    "8-12 years",
    "12+ years",
  ];
  const noticePeriods = [
    "Immediate",
    "15 days",
    "30 days",
    "60 days",
    "90 days",
    "More than 90 days",
  ];

  const workModes = [
    "Full-time",
    "Part-time",
    "Remote",
    "Hybrid",
    "Contract",
    "Internship",
  ];
  const positions = [
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Data Analyst",
    "UI/UX Designer",
    "Project Manager",
    "Business Analyst",
    "DevOps Engineer",
    "Other",
  ];
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
  const validate = () => {
    let newErrors = {};
    if (!formData.full_name.trim())
      newErrors.full_name = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.position_applied)
      newErrors.position_applied = "Position applied is required";
    if (!formData.highest_education)
      newErrors.highest_education = "Highest education is required";
    if (!formData.total_experience)
      newErrors.total_experience = "Total experience is required";
    if (!formData.available_from)
      newErrors.available_from = "Available from date is required";
    if (!formData.resume_name) newErrors.resume_name = "Resume is required";
    if (!formData.terms_accepted)
      newErrors.terms_accepted = "You must accept the terms";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (formData.phone && formData.phone.length !== 10) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
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
            <div className="col-lg-8">
              <div className="text-center mb-4">
                <h1 className="fw-bold text-dark">Job Application Form</h1>
                <p className="text-muted">
                  Fill in your details to apply for the position
                </p>
                <div className="alert alert-info">
                  <small>
                    <strong>Note:</strong> All fields marked with * are required
                  </small>
                </div>
              </div>

              {/* Form Card */}
              <div className="card shadow border-0 rounded-3">
                <div className="card-body p-0">
                  <div
                    className="p-4 p-md-5"
                    style={{
                      maxHeight: "calc(100vh - 200px)",
                      overflowY: "auto",
                    }}
                  >
                    <form onSubmit={handleSubmit}>
                      {/* 1. Personal Information Section */}
                      <div className="mb-4 pb-3 border-bottom">
                        <h5 className="fw-bold text-primary mb-3">
                          👤 Personal Information
                        </h5>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="full_name"
                            className={`form-control ${errors.full_name ? "is-invalid" : ""}`}
                            value={formData.full_name}
                            placeholder="Enter your full name"
                            onChange={handleChange}
                          />
                          {errors.full_name && (
                            <div className="invalid-feedback">
                              {errors.full_name}
                            </div>
                          )}
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                            value={formData.email}
                            placeholder="Enter your email address"
                            onChange={handleChange}
                          />
                          {errors.email && (
                            <div className="invalid-feedback">
                              {errors.email}
                            </div>
                          )}
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                            value={formData.phone}
                            placeholder="Enter 10-digit phone number"
                            maxLength={10}
                            onChange={handleChange}
                          />
                          {errors.phone && (
                            <div className="invalid-feedback">
                              {errors.phone}
                            </div>
                          )}
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            Date of Birth
                          </label>
                          <input
                            type="date"
                            name="date_of_birth"
                            className="form-control"
                            value={formData.date_of_birth}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-medium">Gender</label>
                          <select
                            name="gender"
                            className="form-select"
                            value={formData.gender}
                            onChange={handleChange}
                          >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                            <option value="Prefer not to say">
                              Prefer not to say
                            </option>
                          </select>
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            Nationality
                          </label>
                          <input
                            type="text"
                            name="nationality"
                            className="form-control"
                            value={formData.nationality}
                            placeholder="Enter your nationality"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      {/* 2. Address Information */}
                      <div className="mb-4 pb-3 border-bottom">
                        <h5 className="fw-bold text-primary mb-3">
                          🏠 Address Information
                        </h5>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            Address
                          </label>
                          <textarea
                            name="address"
                            className="form-control"
                            value={formData.address}
                            placeholder="Enter your complete address"
                            rows="3"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-medium">City</label>
                          <input
                            type="text"
                            name="city"
                            className="form-control"
                            value={formData.city}
                            placeholder="Enter your city"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            State/Province
                          </label>
                          <input
                            type="text"
                            name="state"
                            className="form-control"
                            value={formData.state}
                            placeholder="Enter your state"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            Postal Code
                          </label>
                          <input
                            type="text"
                            name="postal_code"
                            className="form-control"
                            value={formData.postal_code}
                            placeholder="Enter postal code"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            Country
                          </label>
                          <select
                            name="country"
                            className="form-select"
                            value={formData.country}
                            onChange={handleChange}
                          >
                            {countries.map((country) => (
                              <option key={country} value={country}>
                                {country}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* 3. Education Information */}
                      <div className="mb-4 pb-3 border-bottom">
                        <h5 className="fw-bold text-primary mb-3">
                          🎓 Education Information
                        </h5>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            Highest Education *
                          </label>
                          <select
                            name="highest_education"
                            className={`form-select ${errors.highest_education ? "is-invalid" : ""}`}
                            value={formData.highest_education}
                            onChange={handleChange}
                          >
                            <option value="">Select Highest Education</option>
                            {educationLevels.map((level) => (
                              <option key={level} value={level}>
                                {level}
                              </option>
                            ))}
                          </select>
                          {errors.highest_education && (
                            <div className="invalid-feedback">
                              {errors.highest_education}
                            </div>
                          )}
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            University/College
                          </label>
                          <input
                            type="text"
                            name="university"
                            className="form-control"
                            value={formData.university}
                            placeholder="Enter university/college name"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            Field of Study
                          </label>
                          <input
                            type="text"
                            name="field_of_study"
                            className="form-control"
                            value={formData.field_of_study}
                            placeholder="e.g., Computer Science, Business Administration"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            Graduation Year
                          </label>
                          <input
                            type="number"
                            name="graduation_year"
                            className="form-control"
                            value={formData.graduation_year}
                            placeholder="e.g., 2020"
                            min="1900"
                            max="2099"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            CGPA/Percentage
                          </label>
                          <input
                            type="text"
                            name="cgpa_percentage"
                            className="form-control"
                            value={formData.cgpa_percentage}
                            placeholder="e.g., 8.5 CGPA or 85%"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      {/* 4. Work Experience */}
                      <div className="mb-4 pb-3 border-bottom">
                        <h5 className="fw-bold text-primary mb-3">
                          💼 Work Experience
                        </h5>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            Total Experience *
                          </label>
                          <select
                            name="total_experience"
                            className={`form-select ${errors.total_experience ? "is-invalid" : ""}`}
                            value={formData.total_experience}
                            onChange={handleChange}
                          >
                            <option value="">Select Experience</option>
                            {experienceYears.map((exp) => (
                              <option key={exp} value={exp}>
                                {exp}
                              </option>
                            ))}
                          </select>
                          {errors.total_experience && (
                            <div className="invalid-feedback">
                              {errors.total_experience}
                            </div>
                          )}
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            Current Company
                          </label>
                          <input
                            type="text"
                            name="current_company"
                            className="form-control"
                            value={formData.current_company}
                            placeholder="Enter current company name"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            Current Position
                          </label>
                          <input
                            type="text"
                            name="current_position"
                            className="form-control"
                            value={formData.current_position}
                            placeholder="Enter your current position"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            Current Salary (₹/per annum)
                          </label>
                          <input
                            type="text"
                            name="current_salary"
                            className="form-control"
                            value={formData.current_salary}
                            placeholder="e.g., 8,00,000"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            Expected Salary (₹/per annum)
                          </label>
                          <input
                            type="text"
                            name="expected_salary"
                            className="form-control"
                            value={formData.expected_salary}
                            placeholder="e.g., 10,00,000"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            Notice Period
                          </label>
                          <select
                            name="notice_period"
                            className="form-select"
                            value={formData.notice_period}
                            onChange={handleChange}
                          >
                            <option value="">Select Notice Period</option>
                            {noticePeriods.map((period) => (
                              <option key={period} value={period}>
                                {period}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="mb-4 pb-3 border-bottom">
                        <h5 className="fw-bold text-primary mb-3">
                          📋 Job Information
                        </h5>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            Position Applied For *
                          </label>
                          <select
                            name="position_applied"
                            className={`form-select ${errors.position_applied ? "is-invalid" : ""}`}
                            value={formData.position_applied}
                            onChange={handleChange}
                          >
                            <option value="">Select Position</option>
                            {positions.map((position) => (
                              <option key={position} value={position}>
                                {position}
                              </option>
                            ))}
                          </select>
                          {errors.position_applied && (
                            <div className="invalid-feedback">
                              {errors.position_applied}
                            </div>
                          )}
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            Job Reference (if any)
                          </label>
                          <input
                            type="text"
                            name="job_reference"
                            className="form-control"
                            value={formData.job_reference}
                            placeholder="e.g., Employee referral, Job portal"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            Available From Date *
                          </label>
                          <input
                            type="date"
                            name="available_from"
                            className={`form-control ${errors.available_from ? "is-invalid" : ""}`}
                            value={formData.available_from}
                            onChange={handleChange}
                          />
                          {errors.available_from && (
                            <div className="invalid-feedback">
                              {errors.available_from}
                            </div>
                          )}
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            Preferred Work Mode
                          </label>
                          <select
                            name="preferred_work_mode"
                            className="form-select"
                            value={formData.preferred_work_mode}
                            onChange={handleChange}
                          >
                            {workModes.map((mode) => (
                              <option key={mode} value={mode}>
                                {mode}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* 6. Skills & Additional Info */}
                      <div className="mb-4 pb-3 border-bottom">
                        <h5 className="fw-bold text-primary mb-3">
                          🔧 Skills & Additional Information
                        </h5>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            Key Skills
                          </label>
                          <textarea
                            name="key_skills"
                            className="form-control"
                            value={formData.key_skills}
                            placeholder="Enter your key skills separated by commas (e.g., JavaScript, React, Node.js, Python)"
                            rows="3"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            Languages Known
                          </label>
                          <input
                            type="text"
                            name="languages_known"
                            className="form-control"
                            value={formData.languages_known}
                            placeholder="e.g., English, Hindi, French"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            LinkedIn Profile URL
                          </label>
                          <input
                            type="url"
                            name="linkedin_profile"
                            className="form-control"
                            value={formData.linkedin_profile}
                            placeholder="https://www.linkedin.com/in/yourprofile"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            Portfolio/Website URL
                          </label>
                          <input
                            type="url"
                            name="portfolio_url"
                            className="form-control"
                            value={formData.portfolio_url}
                            placeholder="https://www.yourportfolio.com"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      {/* 7. Documents */}
                      <div className="mb-4 pb-3 border-bottom">
                        <h5 className="fw-bold text-primary mb-3">
                          📄 Documents
                        </h5>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            Upload Resume *
                          </label>
                          <input
                            type="file"
                            className={`form-control ${errors.resume_name ? "is-invalid" : ""}`}
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                          />
                          {formData.resume_name && (
                            <small className="text-success d-block mt-1">
                              Selected file: {formData.resume_name}
                            </small>
                          )}
                          {errors.resume_name && (
                            <div className="invalid-feedback">
                              {errors.resume_name}
                            </div>
                          )}
                          <small className="text-muted">
                            Accepted formats: PDF, DOC, DOCX (Max: 5MB)
                          </small>
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            Cover Letter (Optional)
                          </label>
                          <textarea
                            name="cover_letter_text"
                            className="form-control"
                            value={formData.cover_letter_text}
                            placeholder="Write your cover letter here..."
                            rows="4"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      {/* 8. Declaration */}
                      <div className="mb-4">
                        <div className="form-check">
                          <input
                            className={`form-check-input ${errors.terms_accepted ? "is-invalid" : ""}`}
                            type="checkbox"
                            id="termsCheck"
                            name="terms_accepted"
                            checked={formData.terms_accepted}
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="termsCheck"
                          >
                            I hereby declare that the information provided above
                            is true and accurate to the best of my knowledge. *
                          </label>
                          {errors.terms_accepted && (
                            <div className="invalid-feedback d-block">
                              {errors.terms_accepted}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Submit Error */}
                      {errors.submit && (
                        <div className="alert alert-danger mb-4">
                          {errors.submit}
                        </div>
                      )}

                      {/* Submit Buttons */}
                      <div className="text-center mt-4 pt-3 border-top">
                        <button
                          type="submit"
                          className="btn btn-success px-5 py-2 fw-medium"
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2"></span>
                              Submitting Application...
                            </>
                          ) : (
                            "Submit Application"
                          )}
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary px-5 py-2 fw-medium ms-3"
                          onClick={() => navigate(-1)}
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary px-5 py-2 fw-medium ms-3"
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                          }
                        >
                          Scroll to Top
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* Form Progress Info */}
              <div className="mt-3 text-center">
                <small className="text-muted">
                  Fill all sections carefully. Fields marked with * are
                  mandatory.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      <Popup
        open={successOpen}
        onClose={() => setSuccessOpen(false)}
        modal
        overlayStyle={{ background: "rgba(0,0,0,0.35)" }}
      >
        <div
          className="bg-white rounded-3 shadow-lg p-0"
          style={{ width: "400px" }}
        >
          <div className="p-4 text-center">
            <div className="mb-3">
              <div className="rounded-circle bg-success bg-opacity-10 d-inline-flex p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  className="bi bi-check-circle-fill text-success"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
              </div>
            </div>
            <h5 className="fw-bold mb-2">
              Application Submitted Successfully!
            </h5>
            <p className="text-muted mb-3">
              Thank you for applying. We have received your application for the
              position of <strong>{formData.position_applied}</strong>.
            </p>
            <p className="text-muted mb-4">
              We will review your application and contact you soon.
            </p>
            <div className="d-flex gap-2 justify-content-center">
              <button
                className="btn btn-outline-secondary"
                onClick={() => {
                  setSuccessOpen(false);
                  // Reset form
                  setFormData({
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
                }}
              >
                Apply for Another
              </button>
              <button
                className="btn btn-success"
                onClick={() => {
                  setSuccessOpen(false);
                  navigate("/applications");
                }}
              >
                View Applications
              </button>
            </div>
          </div>
        </div>
      </Popup>

      {/* Footer */}
      <Fooder />

      {/* Custom Scrollbar Styling */}
      <style jsx>{`
        .card-body div::-webkit-scrollbar {
          width: 8px;
        }
        .card-body div::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .card-body div::-webkit-scrollbar-thumb {
          background: #007bff;
          border-radius: 10px;
        }
        .card-body div::-webkit-scrollbar-thumb:hover {
          background: #0056b3;
        }
      `}</style>
    </div>
  );
}
export default JobApplication;

<div className="mb-3 d-flex align-items-center">
  <label className="form-label fw-medium me-3 mb-0" style={{ width: "150px" }}>
    Full Name *
  </label>

  <div className="flex-grow-1">
    <input
      type="text"
      name="full_name"
      className={`form-control ${errors.full_name ? "is-invalid" : ""}`}
      value={formData.full_name}
      onChange={handleChange}
    />

    {errors.full_name && (
      <div className="invalid-feedback d-block">{errors.full_name}</div>
    )}
  </div>
</div>;

<div className="mb-3 row align-items-center">
  <label className="col-sm-4 col-form-label fw-medium">Gender</label>
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
</div>;

const express = require("express");
const fs = require("fs");
const cors = require("cors");
const console = require("console");
const app = express();
app.use(cors());
app.use(express.json());
const JSON_FILE = "data.json";
const TEXT_FILE = "pipeline.txt";
app.post("/save", (req, res) => {
  const formData = req.body;
  let data = [];
  if (fs.existsSync(JSON_FILE)) {
    data = JSON.parse(fs.readFileSync(JSON_FILE));
  }
  data.push(formData);
  fs.writeFileSync(JSON_FILE, JSON.stringify(data, null, 2));
  const textData = `
Name: ${formData.full_name}
Email: ${formData.email}
Role: ${formData.role}
Skills: ${formData.key_skills}
----------------------------------
`;
  console.log("hi");
  fs.appendFileSync(TEXT_FILE, textData);
  res.json({ message: "Data saved successfully" });
});
app.get("/profiles", (req, res) => {
  if (!fs.existsSync(JSON_FILE)) {
    return res.json([]);
  }
  const data = JSON.parse(fs.readFileSync(JSON_FILE));
  res.json(data);
});
app.listen(5000,()=>{
  console.log("Server running on http://localhost:5000");
})
app._router()





import { Chart as ChartJS } from "chart.js";
import {
  BoxPlotController,
  BoxAndWiskers,
} from "chartjs-chart-box-and-violin-plot";
import { Chart } from "react-chartjs-2";
import { createBoxPlotData } from "../utils/boxPlot";

ChartJS.register(BoxPlotController, BoxAndWiskers);

const marks = [89, 85, 50, 30, 90];
const boxData = createBoxPlotData(marks);

export default function BoxPlot() {
  return (
    <Chart
      type="boxplot"
      data={{
        labels: ["Student Marks"],
        datasets: [
          {
            label: "Marks Distribution",
            data: [boxData],
            backgroundColor: "rgba(13,110,253,0.4)",
            borderColor: "#0d6efd",
            borderWidth: 2,
          },
        ],
      }}
      options={{
        responsive: true,
        plugins: {
          legend: { display: true },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Marks",
            },
          },
        },
      }}
    />
  );
}




import React, { useState } from "react";
import { Bar, Pie, Doughnut, Line } from "react-chartjs-2";
import "chart.js/auto";
import { LinearScale } from "chart.js/auto";
function Userinput() {
    const [marks, setMarks] = useState({
        Shortlisted: "",
        Interviews: "",
        Rejected: "",
        Padding: "",
    });
    const [showChart, setShowChart] = useState(false);
    const [chartType, setChartType] = useState("pie");
    const handleChange = (e) => {
    setMarks({ ...marks, [e.target.name]: e.target.value });
    };
    const handleSubmit = () => {
    const values = Object.values(marks);
    const hasData = values.some((val) => val !== "");
    setShowChart(hasData);
    };
    const labels = Object.keys(marks);
    const dataValues = Object.values(marks);
    const chartData = {
    labels,
    datasets: [
        {
        label: "Marks",
        data: dataValues,
        backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#9966FF",
        ],
        borderColor: "#333",
        borderWidth: 1,
        },
    ],
    };
    const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        datalabels: {
        color: "#ffffff",
        font: { weight: "bold" },
        formatter: (value, ctx) =>
            `${ctx.chart.data.labels[ctx.dataIndex]} (${value})`,
        },
    },
    };
    const renderChart = () => {
    switch (chartType) {
        case "bar":
        return <Bar data={chartData} options={commonOptions} />;
        case "doughnut":
        return <Doughnut data={chartData} options={commonOptions} />;
        case "line":
        return <Line data={chartData} options={commonOptions} />;
        default:
        return <Pie data={chartData} options={commonOptions} />;
    }
    };
    return (
      <div
        className="container-fluid mt-4"
        style={{ maxHeight: "100vh", overflow: "scroll", maxWidth: "100vw" }}
      >
        <div className="text-center text-primary mb-3">
          <h4> 💼 Application Chart</h4>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              {labels.map((subject) => (
                <div className="input-group input-group-sm mb-3" key={subject}>
                  <span className="input-group-text w-50 justify-content-center">
                    {subject}
                  </span>
                  <input
                    type="number"
                    name={subject}
                    className="form-control"
                    value={marks[subject]}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <input type="text"/>
              <div className="d-flex justify-content-between mt-3">
                <button
                  className={`btn ${
                    chartType === "pie" ? "btn-primary" : "btn-outline-primary"
                  }`}
                  onClick={() => setChartType("pie")}
                  title="Pie Chart"
                >
                  🥧 Pic
                </button>
                <button
                  className={`btn ${
                    chartType === "bar" ? "btn-primary" : "btn-outline-primary"
                  }`}
                  onClick={() => setChartType("bar")}
                  title="Bar Chart"
                >
                  📊 Bar
                </button>
                <button
                  className={`btn ${
                    chartType === "doughnut"
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() => setChartType("doughnut")}
                  title="Doughnut Chart"
                >
                  🍩 Doughnut
                </button>
                <button
                  className={`btn ${
                    chartType === "line" ? "btn-primary" : "btn-outline-primary"
                  }`}
                  onClick={() => setChartType("line")}
                  title="Line Chart"
                >
                  📈 Bar
                </button>
              </div>
              <div className="d-grid mt-4">
                <button className="btn btn-success" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card shadow-sm p-3" style={{ height: "70vh" }}>
              {showChart ? (
                <div style={{ height: "100%" }}>{renderChart()}</div>
              ) : (
                <div className="h-100 d-flex align-items-center justify-content-center">
                  <p className="text-danger fw-bold">
                    Please enter data and submit to view chart
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Userinput;


import React, { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const LineChart = () => {
  const chartRef = useRef(null);

  useLayoutEffect(() => {
    let root = am5.Root.new(chartRef.current);

    // Theme
    root.setThemes([am5themes_Animated.new(root)]);

    // Chart
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
        paddingLeft: 0
      })
    );

    // Cursor
    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineX.set("forceHidden", true);
    cursor.lineY.set("forceHidden", true);

    // Data generation
    let date = new Date();
    date.setHours(0, 0, 0, 0);
    let value = 100;

    function generateData() {
      value = Math.round((Math.random() * 10 - 5) + value);
      am5.time.add(date, "day", 1);
      return {
        date: date.getTime(),
        value: value
      };
    }

    function generateDatas(count) {
      let data = [];
      for (let i = 0; i < count; i++) {
        data.push(generateData());
      }
      return data;
    }

    // Axes
    let xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "day", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {
          minorGridEnabled: true,
          minGridDistance: 80
        })
      })
    );

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {})
      })
    );

    // Series
    let series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}"
        })
      })
    );

    series.fills.template.setAll({
      fillOpacity: 0.2,
      visible: true
    });

    // Scrollbar
    chart.set(
      "scrollbarX",
      am5.Scrollbar.new(root, { orientation: "horizontal" })
    );

    // Set data
    let data = generateDatas(1200);
    series.data.setAll(data);

    // Range logic
    let rangeDate = new Date();
    am5.time.add(rangeDate, "day", Math.round(series.dataItems.length / 2));
    let rangeTime = rangeDate.getTime();

    let seriesRangeDataItem = xAxis.makeDataItem({});
    let seriesRange = series.createAxisRange(seriesRangeDataItem);

    seriesRange.fills.template.setAll({
      visible: true,
      opacity: 0.3,
      fillPattern: am5.LinePattern.new(root, {
        color: am5.color(0xff0000),
        rotation: 45,
        strokeWidth: 2,
        width: 2000,
        height: 2000,
        fill: am5.color(0xffffff)
      })
    });

    seriesRange.strokes.template.set("stroke", am5.color(0xff0000));

    xAxis.onPrivate("max", function (value) {
      seriesRangeDataItem.set("endValue", value);
      seriesRangeDataItem.set("value", rangeTime);
    });

    let range = xAxis.createAxisRange(xAxis.makeDataItem({}));
    let color = root.interfaceColors.get("primaryButton");

    range.set("value", rangeDate.getTime());
    range.get("grid").setAll({
      strokeOpacity: 1,
      stroke: color
    });

    // Draggable button
    let resizeButton = am5.Button.new(root, {
      themeTags: ["resize", "horizontal"],
      icon: am5.Graphics.new(root, {
        themeTags: ["icon"]
      })
    });

    resizeButton.adapters.add("y", () => 0);
    resizeButton.adapters.add("x", x =>
      Math.max(0, Math.min(chart.plotContainer.width(), x))
    );

    resizeButton.events.on("dragged", function () {
      let x = resizeButton.x();
      let position = xAxis.toAxisPosition(x / chart.plotContainer.width());
      let value = xAxis.positionToValue(position);

      range.set("value", value);
      seriesRangeDataItem.set("value", value);
      seriesRangeDataItem.set("endValue", xAxis.getPrivate("max"));
    });

    range.set(
      "bullet",
      am5xy.AxisBullet.new(root, {
        sprite: resizeButton
      })
    );

    series.appear(1000);
    chart.appear(1000, 100);

    // Cleanup (VERY IMPORTANT in React)
    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div
      ref={chartRef}
      style={{ width: "100%", height: "500px" }}
    />
  );
};

export default LineChart;








import React, { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";

const SimpleBar = () => {
  const chartRef = useRef(null);

  useLayoutEffect(() => {
    const root = am5.Root.new(chartRef.current);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {})
    );

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "subject"
      })
    );

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {})
    );

    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        xAxis,
        yAxis,
        valueYField: "marks",
        categoryXField: "subject"
      })
    );

    xAxis.data.setAll(data);
    series.data.setAll(data);

    return () => root.dispose();
  }, []);

  return <div ref={chartRef} style={{ height: 300 }} />;
};

export default SimpleBar;


const data = [
  { subject: "Maths", marks: 80 },
  { subject: "Science", marks: 70 },
  { subject: "English", marks: 90 }
];






  const chartRef = useRef(null);
  const rootRef = useRef(null);

  const data = [
    { subject: "Maths", marks: 80 },
    { subject: "Science", marks: 70 },
    { subject: "English", marks: 90 }
  ];

  useLayoutEffect(() => {
    // 🔴 Remove old chart if exists
    if (rootRef.current) {
      rootRef.current.dispose();
    }

    // 🟢 Create root
    const root = am5.Root.new(chartRef.current);
    rootRef.current = root;

    // Theme
    root.setThemes([am5themes_Animated.new(root)]);

    // Chart
    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {})
    );

    // ✅ X Axis (Category) — WITH renderer
    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "subject",
        renderer: am5xy.AxisRendererX.new(root, {})
      })
    );

    // ✅ Y Axis (Value) — WITH renderer
    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {})
      })
    );

    // Series
    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        xAxis,
        yAxis,
        valueYField: "marks",
        categoryXField: "subject"
      })
    );

    // Data
    xAxis.data.setAll(data);
    series.data.setAll(data);

    // Cleanup
    return () => {
      root.dispose();
      rootRef.current = null;
    };
  }, []);

  return <div ref={chartRef} style={{ height: 300 }} />;
};

import React, { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";

const SimpleLine = () => {
  const chartRef = useRef(null);

  useLayoutEffect(() => {
    const root = am5.Root.new(chartRef.current);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {})
    );

    const xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {})
    );

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {})
    );

    const series = chart.series.push(
      am5xy.LineSeries.new(root, {
        xAxis,
        yAxis,
        valueXField: "day",
        valueYField: "visitors"
      })
    );

    series.data.setAll(data);

    return () => root.dispose();
  }, []);

  return <div ref={chartRef} style={{ height: 300 }} />;
};

export default SimpleLine;



import React, { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";

const SimplePie = () => {
  const chartRef = useRef(null);

  useLayoutEffect(() => {
    const root = am5.Root.new(chartRef.current);

    const chart = root.container.children.push(
      am5percent.PieChart.new(root, {})
    );

    const series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "browser"
      })
    );

    series.data.setAll(data);

    return () => root.dispose();
  }, []);

  return <div ref={chartRef} style={{ height: 300 }} />;
};

export default SimplePie;
