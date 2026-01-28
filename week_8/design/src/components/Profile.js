import { useEffect, useState } from "react";

function Profile() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/profiles")
      .then((res) => res.json())
      .then((data) => setProfiles(data));
  }, []);

  return (
    <div className="container mt-5">
      <h4 className="text-primary mb-3">Applicants Profile</h4>

      {profiles.map((p, i) => (
        <div key={i} className="card shadow p-3 mb-3">
          <p>
            <b>Name:</b> {p.full_name}
          </p>
          <p>
            <b>Email:</b> {p.email}
          </p>
          <p>
            <b>Role:</b> {p.role}
          </p>
          <p>
            <b>Skills:</b> {p.key_skills}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Profile;
