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
    <div className="min-vh-80 d-flex flex-column">
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
            <div className="col-sm-5">
              <div className="card shadow border-0 rounded-3">
                <div className="card-body p-0">
                  <div
                    className="p-4 p-md-5"
                    style={{
                      maxHeight: "80vh",
                      overflowY: "auto",
                    }}
                  >
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4 pb-3 border-bottom">
                        <h5 className="fw-bold text-primary mb-3">
                          Personal Information
                        </h5>

                        <div className="mb-3">
                          <label
                            className="form-label fw-medium"
                            style={{ width: "150px" }}
                          >
                            Full Name *
                          </label>

                          <input
                            type="text"
                            name="full_name"
                            className={`form-control w-40 ${errors.full_name ? "is-invalid" : ""}`}
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
                            className={`form-control  ${errors.email ? "is-invalid" : ""}`}
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

                      <div className="mb-4 pb-3 border-bottom">
                        <h5 className="fw-bold text-primary mb-3">
                          Address Information
                        </h5>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            House no/Street
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
                            State
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
                            Pin Code
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
                          <input
                            type="text"
                            name="Country"
                            className="form-control"
                            placeholder="Enter Country"
                          />
                        </div>
                      </div>
                      <div className="mb-4 pb-3 border-bottom">
                        <h5 className="fw-bold text-primary mb-3">
                          Education Information
                        </h5>
                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            Highest Education *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Highest Education"
                          />
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
                      <div className="mb-4 pb-3 border-bottom">
                        <h5 className="fw-bold text-primary mb-3">
                          Work Experience
                        </h5>
                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            Total Experience *
                          </label>
                          <input
                            type="text"
                            name="Total_Experience"
                            className="form-control"
                            placeholder="Enter year of Experience"
                          />
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
                            Current Salary
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
                            Expected Salary
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
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Notice Period"
                          />
                        </div>
                      </div>
                      <div className="mb-4 pb-3 border-bottom">
                        <h5 className="fw-bold text-primary mb-3">
                          Job Information
                        </h5>
                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            Position Applied For *
                          </label>
                          <input
                            type="text"
                            placeholder="Enter your Position"
                            className="form-control"
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            Job Reference
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
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Online/Offline"
                          />
                        </div>
                      </div>
                      <div className="mb-4 pb-3 border-bottom">
                        <h5 className="fw-bold text-primary mb-3">
                          Skills & Additional Information
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
                            placeholder="Like English,Tamil"
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

                      <div className="mb-4 pb-3 border-bottom">
                        <h5 className="fw-bold text-primary mb-3">
                        Documents
                        </h5>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            Upload Resume *
                          </label>
                          <input
                            type="file"
                            className={`form-control ${errors.resume_name ? "is-invalid" : ""}`}
                            accept=".pdf"
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
                            Accepted formats: PDF
                          </small>
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-medium">
                            Cover Letter
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
                      {errors.submit && (
                        <div className="alert alert-danger mb-4">
                          {errors.submit}
                        </div>
                      )}
                      <div className="text-center mt-4 pt-3 border-top">
                        <button
                          type="submit"
                          className="btn btn-success px-5 py-2 fw-medium"
                        >
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
