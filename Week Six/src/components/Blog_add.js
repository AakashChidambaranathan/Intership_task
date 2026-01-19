import Fooder from "./Fooder";
import Popup from "reactjs-popup";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import labels from "./lables";
import bg from "../assets/image.png"
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
  const scrollRef = useRef(null);

  const validate = () => {
    let newErrors = {};
    if (!name.trim()) newErrors.name = "fill this";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      const formDate = {
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
        const response = await fetch("http://localhost:5000/save-user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userid: name, data: formDate }),
        });

        if (response.ok) {
          localStorage.setItem("userid", name);
          setSuccessOpen(true);
        } else {
          console.error("Failed to save data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="p-4">
        <div style={{ maxHeight: "78vh" }}>
          <div className="row g-3 bg-black">
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  placeholder="First Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <label>First Name</label>
                {errors.name && (
                  <small className="text-danger">{errors.name}</small>
                )}
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  value={lastname}
                  placeholder="Last Name"
                  onChange={(e) => setlastname(e.target.value)}
                />
                <label>Last Name</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setemail(e.target.value)}
                />
                <label>Email</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  value={title}
                  placeholder="Title"
                  onChange={(e) => settitle(e.target.value)}
                />
                <label>Blog Title</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  value={phone}
                  maxLength={10}
                  placeholder="Phone"
                  onChange={(e) => setphone(e.target.value)}
                />
                <label>Phone</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="date"
                  className="form-control"
                  value={date}
                  onChange={(e) => setData(e.target.value)}
                />
                <label>Date</label>
              </div>
            </div>

            <div className="col-12">
              <div className="form-floating">
                <textarea
                  className="form-control"
                  value={overviews}
                  placeholder="Overview"
                  style={{ height: "120px" }}
                  onChange={(e) => setoverviews(e.target.value)}
                />
                <label>Overview</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  value={f_author}
                  placeholder="Author"
                  onChange={(e) => setf_author(e.target.value)}
                />
                <label>Favorite Author</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  value={address}
                  placeholder="Address"
                  onChange={(e) => setaddress(e.target.value)}
                />
                <label>Address</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  value={father}
                  placeholder="Father"
                  onChange={(e) => setfather(e.target.value)}
                />
                <label>Father Name</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  value={mother}
                  placeholder="Mother"
                  onChange={(e) => setmother(e.target.value)}
                />
                <label>Mother Name</label>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <button type="submit" className="btn btn-md btn-primary px-5">
              Submit
            </button>
          </div>
        </div>
      </form>

      <Popup
        open={successOpen}
        closeOnDocumentClick={false}
        overlayStyle={{ background: "rgba(0,0,0,0.34)" }}
        contentStyle={{
          position: "fixed",
          top: "200px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "500px",
          borderRadius: "10px",
          background: "#fff",
          padding: 0,
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
              x
            </span>
          </div>

          <div className="p-4">
            <p className="mb-0 fs-5">Blog added successfully!</p>
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
              Go to Profile Page
            </button>
          </div>
        </div>
      </Popup>
      <Fooder />
    </>
  );

}

export default Blog_add;
