import Fooder from "./Fooder"
import Header from "./Header"
import data from "./Blog_add"
import react from "react"
function Profile(props){
    return (
      <>
        <center>
          <form>
            <table>
            <tr>
                <td className="fs-3 p-4">Name:</td>
                <th>{props.name}</th>
            </tr>
            <tr>
                <td className="fs-3 p-4">Last_name:</td>
                <th>{props.last_name}</th>
            </tr>
            <tr>
                <td className="fs-3 p-4">Email:</td>
                <th>{props.email}</th>
            </tr>
            <tr>
                <td className="fs-3 p-4">Title_blog:</td>
                <th> {props.Titel_blog} </th>
            </tr>
            <tr>
                <td className="fs-3 p-4">Phone_no:</td>
                <th>{props.phone}</th>
            </tr>
            <tr>
                <td className="fs-3 p-4">fav_author:</td>
                <th>{props.fav_author}</th>
            </tr>
            <tr>
                <td className="fs-3 p-4">Address:</td>
                <th>{props.address}</th>
            </tr>
            <tr>
                <td className="fs-3 p-4">Father name:</td>
                <th>{props.fathe_namer}</th>
            </tr>
            <tr>
                <td className="fs-3 p-4">Mother name:</td>
                <th>{props.mother_name}</th>
            </tr>
            </table>
        </form>
        </center>
        <Fooder />
    </>
    ); 
}
export default Profile