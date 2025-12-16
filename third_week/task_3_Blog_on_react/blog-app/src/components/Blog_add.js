import Fooder from "./Fooder";
import Popup from "reactjs-popup";
import {render} from "react-dom";
import {motion} from  "framer-motion"
import { useState,useEffect } from "react";
import Profile from "./Profile";
function Blog_add() {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
  const [successOpen, setSuccessOpen] = useState(false);
  const [smove, SetSmove] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!name.trim()) newErrors.name = "      fill this";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      localStorage.setItem(
        "profileData",
        JSON.stringify({
          name: name,
          last_name: document.getElementById("last_name")?.value || "",
          email: document.getElementById("email")?.value || "",
          Titel_blog: document.getElementById("title")?.value || "",
          phone: document.getElementById("phone")?.value || "",
          fav_author: document.getElementById("fav_author")?.value || "",
          address: document.getElementById("address")?.value || "",
          father_name: document.getElementById("Father name")?.value || "",
          mother_name: document.getElementById("Mother_name")?.value || "",
        })
      );
      setSuccessOpen(true);
    }
  };
  return (
    <>
      <div className="overflow-auto" style={{ maxHeight: "73.5vh" }}>
        <center>
          <form onSubmit={handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>Enter your name* :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      id="name"
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
                    <input id="last_name" type="text" placeholder="Last Name" />
                  </td>
                </tr>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label htmlFor="email">Email :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input id="email" type="email" placeholder="Email" />
                  </td>
                </tr>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>Title of blog :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input id="title" type="text" placeholder="Title" />
                  </td>
                </tr>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>Enter your phone no :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input id="phone" type="number" placeholder="Phone no" />
                  </td>
                </tr>
                <tr> 
                  <th className="fs-3 p-4 text-end">
                    <label>Write about overView :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input id="overview" type="text" placeholder="Overview" />
                  </td>
                </tr>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>Favorite author :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      id="fav_author"
                      type="text"
                      placeholder="Author name"
                    />
                  </td>
                </tr>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>Address :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input id="address" type="text" placeholder="Address" />
                  </td>
                </tr>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>Father name :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      id="Father name"
                      type="text"
                      placeholder="Father name"
                    />
                  </td>
                </tr>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>Mother name :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      id="Mother_name"
                      type="text"
                      placeholder="Mother name"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="col-2">
              <button type="submit" className="btn btn-primary fs-4">
                submit
              </button>
            </div>
          </form>
        </center>
      </div>
      <Popup
        open={successOpen}
        modal
        closeOnDcumentClick={false}
        overlayStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingTop: "70px",
        }}
        contentStyle={{
          width: "420px",
          padding: "0",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.25)",
          background: "#cfbbbbff",
        }}
      >
        {(close) => (
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                background: "#237befff",
                color: "white",
                padding: "15px",
                fontSize: "20px",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>Modal Popup</span>
              <span
                style={{
                  cursor: "pointer",
                  fontSize: "22px",
                  fontWeight: "bold",
                  lineHeight: "1",
                }}
                onClick={() => {
                  window.location.reload();
                }}
              >
                ×
              </span>
            </div>
            <div style={{ padding: "20px" }}>
              <p style={{ fontSize: "16px", marginTop: "10px" }}>Blog added</p>
            </div>
            <div
              style={{
                borderTop: "1px solid #ddd",
                padding: "10px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <button
                className="bg-blue"
                onClick={() => {
                  window.location.reload();
                }}
              >
                close
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