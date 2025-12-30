import Fooder from "./Fooder";
import Popup from "reactjs-popup";
import { useState, useEffect } from "react";
import { useRef } from "react";
import labels from "./lables";
import { useNavigate } from "react-router-dom";
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
    if (!validate()) return;
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const response = await fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (response.ok) {
      console.log("save form add_blog_file");
      setSuccessOpen(true);
    } else {
      console.error("Failed to save data");
    }
  };
  return (
    <>
      <div
        ref={scrollRef}
        className="overflow-auto"
        style={{ maxHeight: "75vh" }}
      >
        <center>
          <form onSubmit={handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>{labels.name}</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      id="name"
                      name={labels.name}
                      type="text"
                      placeholder="First Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <small>{errors.name}</small>}
                  </td>
                </tr>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>{labels.last_name}</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      id="last_name"
                      name={labels.last_name}
                      type="text"
                      placeholder="Last Name"
                      value={lastname}
                      onChange={(e) => setlastname(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label htmlFor="email">{labels.email}</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      id="email"
                      name={labels.email}
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>{labels.Titel_blog}</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      id="title"
                      name={labels.Titel_blog}
                      type="text"
                      placeholder="Title"
                      value={title}
                      onChange={(e) => settitle(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>{labels.phone}</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      id="phone"
                      name={labels.phone}
                      type="text"
                      placeholder="Phone no"
                      maxLength={"10"}
                      value={phone}
                      onChange={(e) => setphone(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>{labels.about}</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      id="overview"
                      name={labels.about}
                      type="text"
                      placeholder="Overview"
                      value={overviews}
                      onChange={(e) => setoverviews(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>{labels.fav_author}</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      id="fav_author"
                      name={labels.fav_author}
                      type="text"
                      placeholder="Author name"
                      value={f_author}
                      onChange={(e) => setf_author(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>{labels.address}</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      id="address"
                      name={labels.address}
                      type="text"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setaddress(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>{labels.father_name}</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      id="Father name"
                      name={labels.father_name}
                      type="text"
                      placeholder="Father name"
                      value={father}
                      onChange={(e) => setfather(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>{labels.mother_name}</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      id="Mother_name"
                      name={labels.mother_name}
                      type="text"
                      placeholder="Mother name"
                      onChange={(e) => setmother(e.target.value)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <br></br>
            <br />
            <div className="col-2">
              <button
                type="submit"
                className="btn btn-primary fs-4 position-fixed start-50 translate-middle-x shadow"
                style={{
                  bottom: center ? "10%" : "67px",
                  transition: "bottom 0.4s ease-in-out",
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </center>
      </div>
      <Popup
        open={successOpen}
        closeOnDocumentClick={false}
        overlayStyle={{
          background: "rgba(0,0,0,0.3)",
        }}
        contentStyle={{
          position: "fixed",
          top: "210px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          maxWidth: "90vw",
          padding: "0",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
          background: "#cfbbbbff",
        }}
      >
        {(close) => (
          <div className="text-center">
            <div
              className="d-flex justify-content-between align-items-center px-3 py-2"
              style={{ background: "#237befff", color: "white" }}
            >
              <span className="fw-bold">Success</span>
              <span
                style={{ cursor: "pointer", fontSize: "22px" }}
                onClick={close}
              >
                ×
              </span>
            </div>
            <div className="p-4">
              <p className="mb-0">Blog added</p>
            </div>
            <div className="border-top p-3 text-end">
              <button
                className="btn btn-primary"
                onClick={() => {
                  close();
                  navigate("/");
                }}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </Popup>
      <Fooder />
    </>
  );
}
export default Blog_add;