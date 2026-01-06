import Fooder from "./Fooder";
import Popup from "reactjs-popup";
import { useState, useEffect, useRef } from "react";
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
        style={{ maxHeight: "75vh" }}
      >
        <center>
          <form onSubmit={handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>Enter your name * :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
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
                    <label>Enter your last :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={lastname}
                      onChange={(e) => setlastname(e.target.value)}
                    />
                  </td>
                </tr>

                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>Email :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </td>
                </tr>

                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>Title of blog :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      type="text"
                      placeholder="Title"
                      value={title}
                      onChange={(e) => settitle(e.target.value)}
                    />
                  </td>
                </tr>

                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>Enter your phone no :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      type="text"
                      placeholder="Phone no"
                      maxLength="10"
                      value={phone}
                      onChange={(e) => setphone(e.target.value)}
                    />
                  </td>
                </tr>

                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>Write about overview :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      type="text"
                      placeholder="Overview"
                      value={overviews}
                      onChange={(e) => setoverviews(e.target.value)}
                    />
                  </td>
                </tr>

                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>Favorite author :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      type="text"
                      placeholder="Author name"
                      value={f_author}
                      onChange={(e) => setf_author(e.target.value)}
                    />
                  </td>
                </tr>

                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>Address :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      type="text"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setaddress(e.target.value)}
                    />
                  </td>
                </tr>

                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>Father name :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      type="text"
                      placeholder="Father name"
                      value={father}
                      onChange={(e) => setfather(e.target.value)}
                    />
                  </td>
                </tr>

                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>Mother name :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      type="text"
                      placeholder="Mother name"
                      value={mother}
                      onChange={(e) => setmother(e.target.value)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>

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
        overlayStyle={{ background: "rgba(0,0,0,0.3)" }}
        contentStyle={{
          position: "fixed",
          top: "210px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
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
            <p className="mb-0">Blog added</p>
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
