import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Fooder from "./Fooder";
import labels from "./lables";

function Profile() {
  const { userid } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/get-user/${userid}`)
      .then((res) => {
        if (!res.ok) throw new Error("User not found");
        return res.json();
      })
      .then((result) => setData(result))
      .catch(() => setError("No data found"));
  }, [userid]);

  const downloadTextFile = () => {
    if (!data) return;

    const content = `
    ${labels.name}: ${data.name}
    ${labels.last_name}: ${data.lastname}
    ${labels.email}: ${data.email}
    ${labels.title}: ${data.title}
    ${labels.phone}: ${data.phone}
    ${labels.f_author}: ${data.f_author}
    ${labels.address}: ${data.address}
    ${labels.father}: ${data.father}
    ${labels.mother_name} ${data.mother}
    ${data.account ? `${labels.Accountno} ${data.account}` : ""}
    ${data.drivelink ? `${labels.Drive_link} ${data.drivelink}` : ""}`;

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${data.name}_profile.txt`;
    a.click();

    URL.revokeObjectURL(url);
  };

  if (error) return <h2 className="text-center">{error}</h2>;
  if (!data) return <h2 className="text-center">Loading...</h2>;

  return (
    <>
      <div className="d-flex justify-content-center">
        <div style={{ width: "60%" }}>
          <table className="table table-bordered fs-4 text-start">
            <colgroup>
              <col style={{ width: "50%" }} />
              <col style={{ width: "50%" }} />
            </colgroup>
            <tbody>
              <tr>
                <th>{labels.name}</th>
                <td>{data.name}</td>
              </tr>
              <tr>
                <th>{labels.last_name}</th>
                <td>{data.lastname}</td>
              </tr>
              <tr>
                <th>{labels.email}</th>
                <td>{data.email}</td>
              </tr>
              <tr>
                <th>{labels.Titel_blog}</th>
                <td>{data.title}</td>
              </tr>
              <tr>
                <th>{labels.phone}</th>
                <td>{data.phone}</td>
              </tr>
              <tr>
                <th>{labels.fav_author}</th>
                <td>{data.f_author}</td>
              </tr>
              <tr>
                <th>{labels.address}</th>
                <td>{data.address}</td>
              </tr>
              <tr>
                <th>{labels.father_name}</th>
                <td>{data.father}</td>
              </tr>
              <tr>
                <th>{labels.mother_name}</th>
                <td>{data.mother}</td>
              </tr>
            </tbody>
          </table>

          <div className="text-center mt-3">
            <button
              className="btn btn-success btn-lg"
              onClick={downloadTextFile}
            >
              Download Profile
            </button>
          </div>
        </div>
      </div>
      <Fooder />
    </>
  );
}

export default Profile;
