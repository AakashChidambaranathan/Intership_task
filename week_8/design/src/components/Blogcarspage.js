import React from "react";
import Header from "./Header";
import Fooder from "./Fooder";
import Bg from "../assets/7a8466e4d1bfa445f15c4ccc44cf5f62.jpg";

function Blogcarspage() {
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center text-center"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${Bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
          color: "#fff",
        }}
      >
        <div className="container px-4">
          <h1 className="fw-bold display-5 mb-3">
            For years, job seekers have had to <br />
            <span className="text-info">search</span>{" "}
            <span className="text-warning">apply</span>{" "}
            <span className="text-success">wait</span> and{" "}
            <span className="text-danger">repeat</span>
          </h1>

          <h2
            className="fw-bold mb-4"
            style={{
              background: "linear-gradient(90deg, #4facfe, #00f2fe)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            That changes here
          </h2>
          x``         
          <p className="lead text-light mx-auto" style={{ maxWidth: "900px" }}>
            Find the right job faster with our smart job search platform. We
            connect talented professionals with trusted employers using
            intelligent matching, real-time job updates, and a seamless
            application process — so you can focus on building your career.
          </p>
        </div>
      </div>      
      <Fooder />
    </>
  );
}
export default Blogcarspage;