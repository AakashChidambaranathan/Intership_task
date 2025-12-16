import Fooder from "./Fooder";
import * as XLSX from "xlsx";

function Profile() {
  const data = JSON.parse(localStorage.getItem("profileData"));

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
      },
    ];
    const worksheet = XLSX.utils.json_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Profile Data");
    XLSX.writeFile(workbook, "profile_data.xlsx");
  };
  return (
    <>
      <div className="overflow-auto" style={{ maxHeight: "72vh" }}>
        <center>
          <table>
            <tbody>
              <tr>
                <td className="fs-3 p-4 text-center">Name :</td>
                <td className="fs-3 p-4 text-center">{data.name}</td>
              </tr>
              <tr>
                <td className="fs-3 p-4 text-center">Last name :</td>
                <td className="fs-3 p-4 text-center">{data.last_name}</td>
              </tr>
              <tr>
                <td className="fs-3 p-4 text-center">Email :</td>
                <td className="fs-3 p-4 text-center">{data.email}</td>
              </tr>
              <tr>
                <td className="fs-3 p-4 text-center">Title blog :</td>
                <td className="fs-3 p-4 text-center">{data.Titel_blog}</td>
              </tr>
              <tr>
                <td className="fs-3 p-4 text-center">Phone :</td>
                <td className="fs-3 p-4 text-center">{data.phone}</td>
              </tr>
              <tr>
                <td className="fs-3 p-4 text-center">Favorite author :</td>
                <td className="fs-3 p-4 text-center">{data.fav_author}</td>
              </tr>
              <tr>
                <td className="fs-3 p-4 text-center">Address :</td>
                <td className="fs-3 p-4 text-center">{data.address}</td>
              </tr>
              <tr>
                <td className="fs-3 p-4 text-center">Father name :</td>
                <td className="fs-3 p-4 text-center">{data.father_name}</td>
              </tr>
              <tr>
                <td className="fs-3 p-4 text-center">Mother name :</td>
                <td className="fs-3 p-4 text-center">{data.mother_name}</td>
              </tr>
            </tbody>
          </table>
          <div className="my-4">
            <button
              className="btn btn-success fs-4 px-4"
              onClick={downloadExcel}
            >
              Download Excel
            </button>
          </div>
        </center>
      </div>
      <Fooder />
    </>
  );
}

export default Profile;
