import Fooder from "./Fooder";
import Popup from "reactjs-popup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/8aacf9a38100f5eecdeb48cbde82eae9.jpg";
import labels from "./lables";
function Blog_add() {
  const [formData, setFormData] = useState({
    labe: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    father: "",
    mother: "",
    date: "",

    title: "",
    category: "Technology", 
    overviews: "",
    content: "", 
    read_time: "5",
    f_author: "",


    tags: "",
    keywords: "", 
    is_published: true, 
    featured_image: "", 
    related_blog_1: "", 
    related_blog_2: "",
    related_blog_3: "",
  });

  const [errors, setErrors] = useState({});
  const [successOpen, setSuccessOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const categories = [
    "Technology",
    "Lifestyle",
    "Travel",
    "Food",
    "Health",
    "Business",
    "Education",
    "Entertainment",
    "Other",
  ];

  const readingTimes = ["2", "3", "5", "7", "10", "15"];

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "First name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.title.trim()) newErrors.title = "Blog title is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (formData.phone && formData.phone.length !== 10)
      newErrors.phone = "Phone number must be 10 digits";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.content.trim())
      newErrors.content = "Blog content is required";
    if (!formData.category) newErrors.category = "Category is required";

    if (formData.overviews.length > 300)
      newErrors.overviews = "Overview must be less than 300 characters";
    if (formData.tags.length > 100)
      newErrors.tags = "Tags must be less than 100 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/save-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userid: formData.name,
          data: formData,
        }),
      });

      if (res.ok) {
        localStorage.setItem("userid", formData.name);
        setSuccessOpen(true);
      }
    } catch (err) {
      console.error(err);
      setErrors((prev) => ({
        ...prev,
        submit: "Failed to save. Please try again.",
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
        <br></br>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
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
                      <div className="mb-5">
                        <h5 className="fw-bold text-primary mb-3 pb-2 border-bottom">
                          👤 Personal Information
                        </h5>
                        <div className="row g-3">
                          <div className="col-md-6">
                            <label className="form-label fw-medium">
                              {labels.name}
                            </label>
                            <input
                              type="text"
                              name="name"
                              className={`form-control ${errors.name ? "is-invalid" : ""}`}
                              value={formData.name}
                              placeholder="Enter your first name"
                              onChange={handleChange}
                            />
                            {errors.name && (
                              <div className="invalid-feedback">
                                {errors.name}
                              </div>
                            )}
                          </div>

                          <div className="col-md-6">
                            <label className="form-label fw-medium">
                              {labels.last_name}
                            </label>
                            <input
                              type="text"
                              name="lastname"
                              className="form-control"
                              value={formData.lastname}
                              placeholder="Enter your last name"
                              onChange={handleChange}
                            />
                          </div>

                          <div className="col-md-6">
                            <label className="form-label fw-medium">
                              {labels.email}
                            </label>
                            <input
                              type="email"
                              name="email"
                              className={`form-control ${errors.email ? "is-invalid" : ""}`}
                              value={formData.email}
                              placeholder="Enter your email"
                              onChange={handleChange}
                            />
                            {errors.email && (
                              <div className="invalid-feedback">
                                {errors.email}
                              </div>
                            )}
                          </div>

                          <div className="col-md-6">
                            <label className="form-label fw-medium">
                              {labels.phone}
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

                          <div className="col-md-6">
                            <label className="form-label fw-medium">
                              {labels.address}
                            </label>
                            <input
                              type="text"
                              name="address"
                              className="form-control"
                              value={formData.address}
                              placeholder="Enter your address"
                              onChange={handleChange}
                            />
                          </div>

                          <div className="col-md-6">
                            <label className="form-label fw-medium">
                              {labels.Date_d}
                            </label>
                            <input
                              type="date"
                              name="date"
                              className={`form-control ${errors.date ? "is-invalid" : ""}`}
                              value={formData.date}
                              onChange={handleChange}
                            />
                            {errors.date && (
                              <div className="invalid-feedback">
                                {errors.date}
                              </div>
                            )}
                          </div>


                        </div>
                      </div>

                      <div className="mb-5">
                        <h5 className="fw-bold text-primary mb-3 pb-2 border-bottom">
                          📝 Blog Information
                        </h5>
                        <div className="row g-3">
                          <div className="col-12">
                            <label className="form-label fw-medium">
                              Blog Title *
                            </label>
                            <input
                              type="text"
                              name="title"
                              className={`form-control ${errors.title ? "is-invalid" : ""}`}
                              value={formData.title}
                              placeholder="Enter an attractive blog title"
                              onChange={handleChange}
                            />
                            {errors.title && (
                              <div className="invalid-feedback">
                                {errors.title}
                              </div>
                            )}
                          </div>

                          <div className="col-md-6">
                            <label className="form-label fw-medium">
                              Category *
                            </label>
                            <select
                              name="category"
                              className={`form-select ${errors.category ? "is-invalid" : ""}`}
                              value={formData.category}
                              onChange={handleChange}
                            >
                              {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                  {cat}
                                </option>
                              ))}
                            </select>
                            {errors.category && (
                              <div className="invalid-feedback">
                                {errors.category}
                              </div>
                            )}
                          </div>

                          <div className="col-md-6">
                            <label className="form-label fw-medium">
                              Reading Time (minutes)
                            </label>
                            <select
                              name="read_time"
                              className="form-select"
                              value={formData.read_time}
                              onChange={handleChange}
                            >
                              {readingTimes.map((time) => (
                                <option key={time} value={time}>
                                  {time} min
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="col-12">
                            <label className="form-label fw-medium">
                              Overview/Excerpt
                            </label>
                            <textarea
                              name="overviews"
                              className={`form-control ${errors.overviews ? "is-invalid" : ""}`}
                              value={formData.overviews}
                              placeholder="Write a brief summary of your blog (max 300 characters)..."
                              rows="3"
                              maxLength={300}
                              onChange={handleChange}
                            ></textarea>
                            <small className="text-muted d-flex justify-content-between mt-1">
                              <span>Brief description for blog listing</span>
                              <span>
                                {formData.overviews.length}/300 characters
                              </span>
                            </small>
                            {errors.overviews && (
                              <div className="invalid-feedback">
                                {errors.overviews}
                              </div>
                            )}
                          </div>

                          <div className="col-12">
                            <label className="form-label fw-medium">
                              Blog Content *
                            </label>
                            <textarea
                              name="content"
                              className={`form-control ${errors.content ? "is-invalid" : ""}`}
                              value={formData.content}
                              placeholder="Write your blog content here..."
                              rows="8"
                              onChange={handleChange}
                            ></textarea>
                            {errors.content && (
                              <div className="invalid-feedback">
                                {errors.content}
                              </div>
                            )}  
                          </div>

                          <div className="col-md-6">
                            <label className="form-label fw-medium">
                              Favorite Author
                            </label>
                            <input
                              type="text"
                              name="f_author"
                              className="form-control"
                              value={formData.f_author}
                              placeholder="Enter your favorite author"
                              onChange={handleChange}
                            />
                          </div>

                          <div className="col-md-6">
                            <label className="form-label fw-medium">
                              Featured Image URL
                            </label>
                            <input
                              type="url"
                              name="featured_image"
                              className="form-control"
                              value={formData.featured_image}
                              placeholder="https://example.com/image.jpg"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mb-5">
                        <h5 className="fw-bold text-primary mb-3 pb-2 border-bottom">
                          ⚙️ Blog Settings
                        </h5>
                        <div className="row g-3">
                          <div className="col-md-6">
                            <label className="form-label fw-medium">Tags</label>
                            <input
                              type="text"
                              name="tags"
                              className={`form-control ${errors.tags ? "is-invalid" : ""}`}
                              value={formData.tags}
                              placeholder="technology, web, blog, tips"
                              onChange={handleChange}
                            />
                            {errors.tags && (
                              <div className="invalid-feedback">
                                {errors.tags}
                              </div>
                            )}
                          </div>

                          <div className="col-md-6">
                            <label className="form-label fw-medium">
                              SEO Keywords
                            </label>
                            <input
                              type="text"
                              name="keywords"
                              className="form-control"
                              value={formData.keywords}
                              placeholder="blog writing, web development, tips"
                              onChange={handleChange}
                            />
                            
                          </div>

                          <div className="col-12">
                            <label className="form-label fw-medium">
                              Related Blogs
                            </label>
                            <div className="row g-2">
                              <div className="col-md-4">
                                <input
                                  type="text"
                                  name="related_blog_1"
                                  className="form-control"
                                  value={formData.related_blog_1}
                                  placeholder="Related blog title 1"
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="col-md-4">
                                <input
                                  type="text"
                                  name="related_blog_2"
                                  className="form-control"
                                  value={formData.related_blog_2}
                                  placeholder="Related blog title 2"
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="col-md-4">
                                <input
                                  type="text"
                                  name="related_blog_3"
                                  className="form-control"
                                  value={formData.related_blog_3}
                                  placeholder="Related blog title 3"
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {errors.submit && (
                        <div className="alert alert-danger mb-4">
                          {errors.submit}
                        </div>
                      )}
                      <div className="text-center mt-4 pt-4 border-top">
                        <button
                          type="submit"
                          className="btn btn-primary px-5 py-2 fw-medium"
                        >Submit
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
      {/* Footer */}
      <Fooder />
    </div>
  );
}

export default Blog_add;
