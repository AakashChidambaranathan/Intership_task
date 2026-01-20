import Fooder from "./Fooder";
import Popup from "reactjs-popup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/social-media-business-concept-with-wooden-blocks-notebook-glasses-pen-keyboard-white-background-flat-lay.jpg"
function Blog_add() {
  const [name, setName] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [title, settitle] = useState("");
  const [phone, setphone] = useState("");
  const [overviews, setoverviews] = useState("");
  const [f_author, setf_author] = useState("");
  const [address, setaddress] = useState("");
  const [father, setfather] = useState("");
  const [mother, setmother] = useState("");
  const [date, setData] = useState("");
  const [errors, setErrors] = useState({});
  const [successOpen, setSuccessOpen] = useState(false);

  const navigate = useNavigate();

  const validate = () => {
    let newErrors = {};
    if (!name.trim()) newErrors.name = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const formData = {
      name,
      lastname,
      email,
      title,
      phone,
      overviews,
      f_author,
      address,
      father,
      mother,
      date,
    };

    try {
      const res = await fetch("http://localhost:5000/save-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userid: name, data: formData }),
      });

      if (res.ok) {
        localStorage.setItem("userid", name);
        setSuccessOpen(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div
        className="card-body overflow-auto alert-dismissible"
        style={{
          maxHeight: "83vh",
          background: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize:"cover",
        }}
      >
        <div className="container py-5">
          <div
            className="mx-auto shadow-lg rounded-4 p-4"
            style={{ maxWidth: "1000px" }}
          >
            <form onSubmit={handleSubmit}>
              <div className="row g-4">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">First Name</label>
                  <input
                    type="text"
                    className="form-control modern-input"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && (
                    <small className="text-danger">{errors.name}</small>
                  )}
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Last Name</label>
                  <input
                    type="text"
                    className="form-control modern-input"
                    value={lastname}
                    placeholder="Last Name"
                    onChange={(e) => setlastname(e.target.value)}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Email</label>
                  <input
                    type="email"
                    className="form-control modern-input"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Blog Title</label>
                  <input
                    type="text"
                    className="form-control modern-input"
                    value={title}
                    placeholder="Blog Title"
                    onChange={(e) => settitle(e.target.value)}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Phone</label>
                  <input
                    type="text"
                    maxLength={10}
                    className="form-control modern-input"
                    value={phone}
                    placeholder="Phone no"
                    onChange={(e) => setphone(e.target.value)}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Date</label>
                  <input
                    type="date"
                    className="form-control modern-input"
                    value={date}
                    placeholder="Date"
                    onChange={(e) => setData(e.target.value)}
                  />
                </div>

                <div className="col-12">
                  <label className="form-label fw-semibold">Overview</label>
                  <textarea
                    className="form-control modern-input"
                    style={{ height: "140px" }}
                    value={overviews}
                    placeholder="Overview"
                    maxLength={200}
                    onChange={(e) => setoverviews(e.target.value)}
                  ></textarea>
                </div>
                <small className="text-muted d-block text-end">
                  {overviews.length}/200 characters
                </small>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    Favorite Author
                  </label>
                  <input
                    type="text"
                    className="form-control modern-input"
                    value={f_author}
                    placeholder="Favorite Author"
                    onChange={(e) => setf_author(e.target.value)}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Address</label>
                  <input
                    type="text"
                    className="form-control modern-input"
                    value={address}
                    placeholder="Address"
                    onChange={(e) => setaddress(e.target.value)}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Father Name</label>
                  <input
                    type="text"
                    className="form-control modern-input"
                    value={father}
                    placeholder="Father Name"
                    onChange={(e) => setfather(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Mother Name</label>
                  <input
                    type="text"
                    className="form-control modern-input"
                    value={mother}
                    placeholder="Mother Name"
                    onChange={(e) => setmother(e.target.value)}
                  />
                </div>
              </div>

              <div className="text-center mt-4">
                <button className="btn btn-primary px-5 py-2 rounded-3 fw-semibold">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <Popup
          open={successOpen}
          overlayStyle={{ background: "rgba(0,0,0,0.35)" }}
        >
          <div
            className="rounded-4 shadow-lg"
            style={{ background: "#fff", width: "380px" }}
          >
            <div
              className="p-3 fw-bold text-white"
              style={{ background: "#007bff" }}
            >
              Blog Saved
            </div>
            <div className="p-4 fs-6 text-center">Blog added successfully!</div>
            <div className="border-top p-3 text-end">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setSuccessOpen(false);
                  navigate("/profile/" + localStorage.getItem("userid"));
                }}
              >
                Go to Profile
              </button>
            </div>
          </div>
        </Popup>
      </div>
      <Fooder />
    </>
  );
}

export default Blog_add;