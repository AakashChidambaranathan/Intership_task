import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Blogger-Logo.jpg";
function Header() {
  return (
    <>
      <div className="text-center p-2 border-bottom border-4">
        <img src={Logo} alt="Logo" style={{ height: "100px", width: "150px" }} />
        <nav className="mt-1">
          <ul className="nav justify-content-center">
            <li className="nav-item ">
              <Link to="/" className="p-2 fw-bold fs-6 text-decoration-none">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/AddBlog"
                className="p-2 fw-bold fs-6 text-decoration-none"
              >
                Add Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Profile"
                className="p-2 fw-bold fs-6 text-decoration-none"
              >
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default Header;
