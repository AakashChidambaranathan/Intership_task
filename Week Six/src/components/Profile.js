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
    ${labels.mother_name} ${data.mother}`;

    const blob = new Blob([content], {type:"text/plain;charset=utf-8"});
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
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card shadow">
              <div
                className="card-body overflow-auto"
                style={{ maxHeight: "60vh" }}
              >
                <div className="mb-3">
                  <label className="form-label fw-bold">{labels.name}</label>
                  <div className="form-control fs-5">{data?.name ? data.name :"-"}</div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">
                    {labels.last_name}
                  </label>
                  <div className="form-control fs-5">
                    {data?.lastname ? data.lastname : "-"}
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">{labels.email}</label>
                  <div className="form-control fs-5">{data?.email?data.email:"-"}</div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">
                    {labels.Titel_blog}
                  </label>
                  <div className="form-control fs-5">{data?.title?data.title:"-"}</div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">{labels.phone}</label>
                  <div className="form-control fs-5">{data?.email?data.email:"-"}</div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">
                    {labels.fav_author}
                  </label>
                  <div className="form-control fs-5">{data?.f_author?data.f_author:"-"}</div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">{labels.address}</label>
                  <div className="form-control fs-5">{data?.address?data.address:"-"}</div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">{labels.Date_d}</label>
                  <div className="form-control fs-5">{data?.date?data.date:"-"}</div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">
                    {labels.father_name}
                  </label>
                  <div className="form-control fs-5">{data?.father?data.father:"-"}</div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">
                    {labels.mother_name}
                  </label>
                  <div className="form-control fs-5">{data?.mother?data.mother:"-"}</div>
                </div>
                {data.account && (
                  <div className="mb-3">
                    <label className="form-label fw-bold">
                      {labels.Accountno}
                    </label>
                    <div className="form-control fs-5">{data?.account?data.account:"-"}</div>
                  </div>
                )}
                {data.drivelink && (
                  <div className="mb-3">
                    <label className="form-label fw-bold">
                      {labels.Drive_link}
                    </label>
                    <div className="form-control fs-5">
                      <a
                        href={data.drivelink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {data.drivelink}
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <div className="card-footer text-center">
                <button
                  className="btn btn-success btn-sm"
                  onClick={downloadTextFile}
                >
                  Download Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Fooder />
    </>
  );
}

export default Profile;
