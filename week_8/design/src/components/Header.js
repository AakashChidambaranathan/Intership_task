import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/522dad9e4cb3814a0ea0c355a01d9369.jpg";

function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="d-flex align-items-center justify-content-between border-bottom">
      <div>
        <img
          src={Logo}
          alt="Logo"
          style={{
            height: "50px",
            width: "70px",
            borderRadius: "6px",
          }}
        />
      </div>

      <nav className="position-absolute start-50 translate-middle-x ">
        <ul className="nav">
          <li
            className="nav-item mx-2"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Open Home page"
          >
            <Link
              to="/"
              className={`nav-link ${isActive("/") ? "text-primary fw-bold border-bottom border-2 border-primary" : "text-dark"}`}
            >
              <i className="bi bi-house me-1"></i>
              Home
            </Link>
          </li>
          <li className="nav-item mx-2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Application">
            <Link
              to="/Application"
              className={`nav-link ${isActive("/AddBlog") ? "text-success fw-bold border-bottom border-2 border-success" : "text-dark"}`}
            >
              <i className="bi bi-plus-circle me-1"></i>
              Application
            </Link>
          </li>
          <li className="nav-item mx-2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Open profile">
            <Link
              to="/Profile"
              className={`nav-link ${isActive("/Profile") ? "text-warning fw-bold border-bottom border-2 border-warning" : "text-dark"}`}
            >
              <i className="bi bi-person me-1"></i>
              Profile
            </Link>
          </li>
        </ul>
      </nav>

      <div style={{ width: "80px" }}></div>
    </div>
  );
}

export default Header;
