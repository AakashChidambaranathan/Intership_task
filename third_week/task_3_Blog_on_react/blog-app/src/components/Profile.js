import Fooder from "./Fooder";

function Profile() {
const data = JSON.parse(localStorage.getItem("profileData"));

if (!data) return null;

return (
  <>
    <div className="overflow-auto" style={{ maxHeight: "72vh" }}>
      <center>
        <table>
          <tbody className="row-2">
            <b>
              <tr>
                <td className="fs-3 p-4 text-center">Name : </td>
                <td className="fs-3 p-4 text-center">{data.name}</td>
              </tr>
              <tr>
                <td className="fs-3 p-4 text-center">Last Name : </td>
                <td className="fs-3 p-4 text-center">{data.last_name}</td>
              </tr>
              <tr>
                <td className="fs-3 p-4 text-center">Email : </td>
                <td className="fs-3 p-4 text-center">{data.email}</td>
              </tr>
              <tr>
                <td className="fs-3 p-4 text-center">Title Blog : </td>
                <td className="fs-3 p-4 text-center">{data.Titel_blog}</td>
              </tr>
              <tr>
                <td className="fs-3 p-4 text-center">Phone : </td>
                <td className="fs-3 p-4 text-center">{data.phone}</td>
              </tr>
              <tr>
                <td className="fs-3 p-4 text-center">Favorite Author : </td>
                <td className="fs-3 p-4 text-center">{data.fav_author}</td>
              </tr>
              <tr>
                <td className="fs-3 p-4 text-center">Address : </td>
                <td className="fs-3 p-4 text-center">{data.address}</td>
              </tr>
              <tr>
                <td className="fs-3 p-4 text-center">Father Name : </td>
                <td className="fs-3 p-4 text-center">{data.father_name}</td>
              </tr>
              <tr>
                <td className="fs-3 p-4 text-center">Mother Name : </td>
                <td className="fs-3 p-4 text-center">{data.mother_name}</td>
              </tr>
            </b>
          </tbody>
        </table>
      </center>
    </div>
    <Fooder />
  </>
);
}
export default Profile;
