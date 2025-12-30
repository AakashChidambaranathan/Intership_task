import Fooder from "./Fooder";
import * as XLSX from "xlsx";
import { path } from "framer-motion/client";
import labels from "./lables";
function Profile() {
  const paths=path.join(__dirname,"data")
  const data = JSON.parse(paths.getItem("blogAndprofileData"));
  console.log(data);

  const textDs = () => {
    const textData = [
      {
        [labels.name]: data.name,
        [labels.last_name]: data.last_name,
        [labels.email]: data.email,
        [labels.phone]: data.Titel_blog,
        [labels.father_name]: data.Titel_blog,
        [labels.mother_name]: data.mother_name,
        [labels.drivelink]: data.drivelink,
        [labels.account]: data.account,
      },
    ];
  };

  const workconst = Text.password((err)=>{
    if(err){
      console.log("this error");
    }
    console.log("this working")
    const send(()=>{
      data:data=[
        {[labels.name]:name},
        {[labels.last_name]:last_name},
        {[labels.phone]:phone}],
        {[labels.Accountno]:account},
        {[labels.father_name]:father_name},
        {[labels.mother_name]:mother_name},
        {[labels.email]:email}},
    })
  }
  const worktext = Text.utils.JSON_to_Text(textDs);
  const worktex = Text.utils.book_new();
  Text.utils.book_append_sheet(worktext, worktex, "textprofile data");
  const safenamee = data.name.replace(/\s+/g, "_");
  Text.eriteFile(worktext, `${safenamee}.text`);
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
              onClick={textDs}
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