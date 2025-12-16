import Fooder from "./Fooder";
import { useState } from "react";
import Popup from "reactjs-popup";
import {Link} from "react-router-dom"
function ContactPage() {
  const [Account, setAccount] = useState("");
  const [errors, setErrors] = useState({});
  const [successOpen, setSuccessOpen] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!Account.trim()) newErrors.Account = "fill this";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const Add_blog_Data = JSON.parse(localStorage.getItem("Blogdata")) || {};

      const contact = {
        account: Account,
        drivelink: document.getElementById("drive_link")?.value || "",
        password: document.getElementById("password")?.value||"",
      };

      localStorage.setItem(
        "blogAndprofileData",
        JSON.stringify({...Add_blog_Data,...contact})
      )
      setSuccessOpen(true);
    }
  };

  return (
    <>
      <center>
        <form onSubmit={handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>Account No*:</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      type="text"
                      placeholder="Account no"
                      id="Accountno"
                      value={Account}
                      maxLength={"16"}
                      onChange={(e) => setAccount(e.target.value)}
                    />
                    {errors.Account && (
                      <small className="text-danger">{errors.Account}</small>
                    )}
                  </td>
                </tr>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>Drive Link :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      type="text"
                      placeholder="Drive link"
                      id="drive_link"
                    />
                  </td>
                </tr>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>Password :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <button type="submit" className="btn btn-primary fs-4">
              submit
            </button>
        </form>
      </center>
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
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
          background: "#ffffffff",
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
              onClick={() => window.location.reload()}
            >
              ×
            </span>
          </div>

          <div className="p-4">
            <p className="mb-0">Data Stored Successfully</p>
          </div>

          <div className="border-top p-3 text-end">
            <Link to="/Profile" className="btn btn-primary">
              Go Profile
            </Link>
          </div>
        </div>
      </Popup>
      <Fooder />
    </>
  );
}
export default ContactPage;
