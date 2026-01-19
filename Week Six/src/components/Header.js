import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Blogger-Logo.jpg";
function Header() {
  return (
      <div className="d-flex align-items-center justify-content-between p-2 border-bottom border-4">
  <div>
    <img
      src={Logo}
      alt="Logo"
      style={{ height: "55px", width: "80px" }}
    />
  </div>

  <nav className="flex-grow-1">
    <ul className="nav justify-content-center fw-bold fs-6">
      <li className="nav-item">
        <Link to="/" className="p-2 text-decoration-none">
          <i className="bi bi-house"></i> Home
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/AddBlog" className="p-2 text-decoration-none">
          <i className="bi bi-plus-circle-dotted"></i> Add Blog
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/Profile" className="p-2 text-decoration-none">
          <i className="bi bi-person"></i> Profile
        </Link>
      </li>
    </ul>
  </nav>
</div>

  );
}
export default Header;
