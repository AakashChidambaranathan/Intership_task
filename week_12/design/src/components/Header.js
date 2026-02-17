import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/2a3f4ee38c71063942ffa57bf3ce9cf2.jpg";

function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="border-bottom px-3 py-2">
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <Link to="/" className="d-flex align-items-center text-decoration-none">
          <img
            src={Logo}
            alt="Logo"
            style={{ height: "7vh", width: "7vw", borderRadius: "6px" }}
          />
        </Link>
        <ul className="nav justify-content-center flex-wrap">
          <li className="nav-item mx-2">
            <Link
              to="/"
              className={`nav-link ${
                isActive("/") ? "text-primary fw-bold" : "text-dark"
              }`}
            >
              <i className="bi bi-house me-1"></i>
              Home
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link
              to="/Application"
              className={`nav-link ${
                isActive("/Application") ? "text-success fw-bold" : "text-dark"
              }`}
            >
              <i className="bi bi-plus-circle me-1"></i>
              Application
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link
              to="/Profile"
              className={`nav-link ${
                isActive("/Profile") ? "text-warning fw-bold" : "text-dark"
              }`}
            >
              <i className="bi bi-person me-1"></i>
              Profile
            </Link>
          </li>

          <li className="nav-item mx-2">
            <Link
              to="/Dashboard"
              className={`nav-link ${
                isActive("/Dashboard") ? "text-danger fw-bold" : "text-dark"
              }`}
            >
              <i className="bi bi-speedometer2 me-1"></i>
              Dashboard
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link
              to="/Userinput"
              className={`nav-link ${
                isActive("/Userinput") ? "text-info fw-bold" : "text-dark"
              }`}
            >
              <i class="bi bi-bar-chart"></i> Create chart
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link
              to="/Amchart"
              className={`nav-link ${
                isActive("/Amchart") ? "text-secondary fw-bold" : "text-dark"
              }`}
            >
              <i class="bi bi-cake"></i> Amchart
            </Link>
          </li>
        </ul>

        <Link to="/" className="nav-link fw-bold d-flex align-items-center">
          <i className="bi bi-box-arrow-left me-2"></i>
          Log out
        </Link>
      </div>
    </div>
  );
}

export default Header;
