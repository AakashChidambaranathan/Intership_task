import Fooder from "./Fooder";
import Popup from "reactjs-popup";
import { useState, useEffect, useRef } from "react";
import { data, useNavigate } from "react-router-dom";
import labels from "./lables";

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
  const [date,setData]=useState("");
  const [errors, setErrors] = useState({});
  const [successOpen, setSuccessOpen] = useState(false);
  const [center, setCenter] = useState(false);
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let lastScrollTop = el.scrollTop;
    const handleScroll = () => {
      const current = el.scrollTop;
      if (current < lastScrollTop) {
        setCenter(true);
      } else {
        setCenter(false);
      }
      lastScrollTop = current;
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

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
        date
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
      <div
        ref={scrollRef}
        className="overflow-auto"
        style={{ maxHeight: "76vh" }}
      >
        <form onSubmit={handleSubmit} className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="mb-3">
                <label className="form-label fw-bold">{labels.name}</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && (
                  <div className="text-danger small">{errors.name}</div>
                )}  
                {name && (
                  <div className="mt-2 text-start">
                    <h5 className="text-primary">
                      {labels.your_name} {name} 
                    </h5>
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">{labels.last_name}</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  value={lastname}
                  onChange={(e) => setlastname(e.target.value)}
                />
                {lastname && (
                  <div className="mt-2 text-start">
                    <h5 className="text-primary">
                      {labels.your_last_name} {lastname}
                    </h5>
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">{labels.email}</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
                {email && (
                  <div className="mt-2 text-start">
                    <h5 className="text-primary">
                      {labels.your_email} {email}
                    </h5>
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">
                  {labels.Titel_blog}
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => settitle(e.target.value)}
                />
                {title && (
                  <div className="mt-2 text-start">
                    <h5 className="text-primary">
                      {labels.your_blog_titel} {title}
                    </h5>
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">{labels.phone}</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone no"
                  maxLength="10"
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                />
                {phone && (
                  <div className="mt-2 text-start">
                    <h5 className="text-primary">
                      {labels.your_phone} {phone}
                    </h5>
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">{labels.about}</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Overview"
                  value={overviews}
                  onChange={(e) => setoverviews(e.target.value)}
                />
                {overviews && (
                  <div className="mt-2 text-start">
                    <h5 className="text-primary">
                      {labels.your_about} {overviews}
                    </h5>
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">
                  {labels.Date_d}
                </label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setData(e.target.value)}
                />
                {date && (
                  <div className="mt-2 text-start">
                    <h5 className="text-primary">
                      {labels.Your_data} {date}
                    </h5>
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">
                  {labels.fav_author}
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Author name"
                  value={f_author}
                  onChange={(e) => setf_author(e.target.value)}
                />
                {f_author && (
                  <div className="mt-2 text-start">
                    <h5 className="text-primary">
                      {labels.your_fav_author} {f_author}
                    </h5>
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">{labels.address}</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setaddress(e.target.value)}
                />
                {address && (
                  <div className="mt-2 text-start">
                    <h5 className="text-primary">
                      {labels.your_address} {address}
                    </h5>
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">
                  {labels.father_name}
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Father name"
                  value={father}
                  onChange={(e) => setfather(e.target.value)}
                />
                {father && (
                  <div className="mt-2 text-start">
                    <h5 className="text-primary">
                      {labels.your_father_name} {father}
                    </h5>
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">
                  {labels.mother_name}
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mother name"
                  value={mother}
                  onChange={(e) => setmother(e.target.value)}
                />
                {mother && (
                  <div className="mt-2 text-start">
                    <h5 className="text-primary">
                      {labels.your_mother_name} {mother}
                    </h5>
                  </div>
                )}
              </div>
              <div className="text-center mt-4">
                <button type="submit" className="btn btn-primary btn-sm">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Popup
        open={successOpen}
        closeOnDocumentClick={false}
        overlayStyle={{ background: "rgba(0,0,0,0.3)" }}
        contentStyle={{
          position: "fixed",
          top: "200px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "500px",
          maxWidth: "90vw",
          padding: "0",
          borderRadius: "10px",
          background: "#fcfcfcff",
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
            <p className="mb-0 fs-5" >Blog added</p>
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
      <Fooder />
    </>
  );
}

export default Blog_add;