import Fooder from "./Fooder";
import * as XLSX from "xlsx";
import labels from "./lables";
function Profile() {
  const data = JSON.parse(localStorage.getItem("blogAndprofileData"));
  console.log(data);

  const downloadExcel = () => {
    const excelData = [
      {
        [labels.name]: data.name,
        [labels.last_name]: data.last_name,
        [labels.email]: data.email,
        [labels.Titel_blog]: data.Titel_blog,
        [labels.phone]: data.phone,
        [labels.father_name]: data.fav_author,
        [labels.address]: data.address,
        [labels.father_name]: data.father_name,
        [labels.mother_name]: data.mother_name,
        [labels.Accountno]: data.account,
        [labels.Drive_link]: data.drivelink,
        [labels.password]: data.password,
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
                    <th>{labels.name}</th>
                    <td>{data.name}</td>
                  </tr>
                  <tr>
                    <th>{labels.last_name}</th>
                    <td>{data.last_name}</td>
                  </tr>
                  <tr>
                    <th>{labels.email}</th>
                    <td>{data.email}</td>
                  </tr>
                  <tr>
                    <th>{labels.Titel_blog}</th>
                    <td>{data.Titel_blog}</td>
                  </tr>
                  <tr>
                    <th>{labels.phone}</th>
                    <td>{data.phone}</td>
                  </tr>
                  <tr>
                    <th>{labels.fav_author}</th>
                    <td>{data.fav_author}</td>
                  </tr>
                  <tr>
                    <th>{labels.address}</th>
                    <td>{data.address}</td>
                  </tr>
                  <tr>
                    <th>{labels.father_name}</th>
                    <td>{data.father_name}</td>
                  </tr>
                  <tr>
                    <th>{labels.mother_name}</th>
                    <td>{data.mother_name}</td>
                  </tr>
                  <tr>
                    <th>{labels.Accountno}</th>
                    <td>{data.account}</td>
                  </tr>
                  <tr>
                    <th>{labels.Drive_link}</th>
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
                    <th>{labels.password}</th>
                    <td>{data.password}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-Start">
            <button
              className="btn btn-success btn-lg px-5 mt-4"
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
