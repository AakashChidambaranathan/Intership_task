import { useEffect, useState } from "react";
import lb from "./Labels"
function Profile() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5005/profile")
      .then((res) => res.json())
      .then((data) => {
        setProfiles(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <p className="text-muted">Loading applications...</p>
      </div>
    );
  }
  return (
    <div className="container mt-5">
      <h3 className="text-center text-primary mb-4">Job Applications</h3>
      {profiles.length === 0 && (
        <p className="text-center text-muted">No job applications found.</p>
      )}
      <div className="row">
        {profiles.map((p, index) => (
          <div key={index} className="col-lg-6 mb-4">
            <div className="card shadow border-0 rounded-3">
              <div className="card-body">
                <h5 className="fw-bold text-primary mb-3">{p.full_name}</h5>
                <table className="table table-sm table-borderless mb-0">
                  <tbody>
                    <tr>
                      <th>{lb.Name}</th>
                      <td>{p.email}</td>
                    </tr>
                    <tr>
                      <th>{lb.Date_of_Birth}</th>
                      <td>{p.date_of_birth || "-"}</td>
                    </tr>
                    <tr>
                      <th>{lb.Gender}</th>
                      <td>{p.gender || "-"}</td>
                    </tr>
                    <tr>
                      <th>{lb.City}</th>
                      <td>{p.city || "-"}</td>
                    </tr>
                    <tr>
                      <th>{lb.Higher_edu}</th>
                      <td>{p.highest_education || "-"}</td>
                    </tr>
                    <tr>
                      <th>{lb.University}</th>
                      <td>{p.university || "-"}</td>
                    </tr>
                    <tr>
                      <th>{lb.Graduation_Year}</th>
                      <td>{p.graduation_year || "-"}</td>
                    </tr>
                    <tr>
                      <th>{lb.Perferred_job_Role}</th>
                      <td>{p.role || "-"}</td>
                    </tr>
                    <tr>
                      <th>{lb.Key_Skill}</th>
                      <td>{p.key_skills || "-"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Profile;