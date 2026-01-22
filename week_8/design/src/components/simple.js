import Fooder from "./Fooder";
import Popup from "reactjs-popup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/social-media-business-concept-with-wooden-blocks-notebook-glasses-pen-keyboard-white-background-flat-lay.jpg";

function JobApplication() {
  const [formData, setFormData] = useState({
    // Personal Information
    full_name: "",
    email: "",
    phone: "",
    date_of_birth: "",
    gender: "",
    nationality: "",

    // Address Information
    address: "",
    city: "",
    state: "",
    postal_code: "",
    country: "India",

    // Education Information
    highest_education: "",
    university: "",
    graduation_year: "",
    field_of_study: "",
    cgpa_percentage: "",

    // Work Experience
    current_company: "",
    current_position: "",
    total_experience: "",
    current_salary: "",
    expected_salary: "",
    notice_period: "",

    // Job Information
    position_applied: "",
    job_reference: "",
    available_from: "",
    preferred_work_mode: "Full-time",

    // Skills & Additional Info
    key_skills: "",
    languages_known: "",
    linkedin_profile: "",
    portfolio_url: "",

    // Documents
    resume_name: "",
    cover_letter_text: "",

    // Declaration
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

    // Required fields
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

    // Format validation
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
      {/* Main Content */}
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
              {/* Header */}
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

                      {/* 5. Job Information */}
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
