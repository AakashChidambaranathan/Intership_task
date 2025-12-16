import Fooder from "./Fooder";
import * as XLSX from "xlsx";

function Profile() {
  const data = JSON.parse(localStorage.getItem("blogAndprofileData"));

  if (!data) return null;

  const downloadExcel = () => {
    const excelData = [
      {
        Name: data.name,
        "Last name": data.last_name,
        Email: data.email,
        "Title blog": data.Titel_blog,
        Phone: data.phone,
        "Favorite author": data.fav_author,
        Address: data.address,
        "Father name": data.father_name,
        "Mother name": data.mother_name,
        "Account No": data.account,
        "Drive link": data.drivelink,
        Password: data.password,
      },

    ];

    const worksheet = XLSX.utils.json_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Profile Data");
    const safeName = data.name.replace(/\s+/g, "_");
    XLSX.writeFile(workbook, `${safeName}.xlsx`);
  };

  return (
    <>
      <div className="container my-5">
        <div className="row align-items-start">
          <div className="col-md-8">
            <div className="table-responsive">
              <table className="table table-bordered fs-3">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>{data.name}</td>
                  </tr>
                  <tr>
                    <th>Last Name</th>
                    <td>{data.last_name}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{data.email}</td>
                  </tr>
                  <tr>
                    <th>Title Blog</th>
                    <td>{data.Titel_blog}</td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td>{data.phone}</td>
                  </tr>
                  <tr>
                    <th>Favorite Author</th>
                    <td>{data.fav_author}</td>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <td>{data.address}</td>
                  </tr>
                  <tr>
                    <th>Father Name</th>
                    <td>{data.father_name}</td>
                  </tr>
                  <tr>
                    <th>Mother Name</th>
                    <td>{data.mother_name}</td>
                  </tr>
                  <tr>
                    <th>Account No</th>
                    <td>{data.account}</td>
                  </tr>
                  <tr>
                    <th>Drive Link</th>
                    <td>
                      <a
                        href={data.drivelink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {data.drivelink}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th>Password</th>
                    <td>{data.password}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-Start">
            <button
              className="btn btn-success btn-lg px-5 mt-3"
              onClick={downloadExcel} 
            >
              Download Excel
            </button>
          </div>
        </div>
      </div>
      <Fooder />
    </>
  );
}
export default Profile;