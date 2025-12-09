import React from "react";
import Fooder from "./Fooder";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
function Blog_add() {
  return (
    <>
      <div className="overflow-auto" style={{ maxHeight: "72vh" }}>
        <center>
          <form>
            <table>
              <tbody>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>Enter your name* :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      id="name"
                      type="text"
                      placeholder="First Name"
                      required
                      onInvalid={(e) =>
                        e.target.setCustomValidity("enter your first name")
                      }
                      onInput={(e) => e.target.setCustomValidity("")}
                    />
                  </td>
                </tr>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>Enter your last* :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      id="last_name"
                      type="text"
                      placeholder="Last Name"
                      required
                      onInvalid={(e) =>
                        e.target.setCustomValidity("enter your last name")
                      }
                      onInput={(e) => e.target.setCustomValidity("")}
                    />
                  </td>
                </tr>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label htmlFor="email">Email* :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      id="email"
                      type="email"
                      placeholder="Email"
                      required
                      onInvalid={(e) =>
                        e.target.setCustomValidity("Please enter a valid email")
                      }
                      onInput={(e) => e.target.setCustomValidity("")}
                    />
                  </td>
                </tr>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>Title of blog :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input id="title" type="text" placeholder="Title" />
                  </td>
                </tr>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>Enter your phone no :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      id="phone"
                      type="number"
                      placeholder="Phone no"
                      required
                      maxHeight={10}
                      minLength={10}
                    />
                  </td>
                </tr>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>Upload file :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input id="file" type="file" />
                  </td>
                </tr>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>Write about overView :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input id="overview" type="text" placeholder="Overview" />
                  </td>
                </tr>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>Favorite author :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      id="fav_author"
                      type="text"
                      placeholder="Author name"
                    />
                  </td>
                </tr>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>Address :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      id="address"
                      type="text"
                      placeholder="Address"
                      required
                      onInvalid={(e) =>
                        e.target.setCustomValidity("Please enter your address")
                      }
                      onInput={(e) => e.target.setCustomValidity("")}
                    />
                  </td>
                </tr>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>Father name :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      id="Father name"
                      type="text"
                      placeholder="Father name"
                    />
                  </td>
                </tr>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>Mother name :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      id="fav_author"
                      type="text"
                      placeholder="Mother name"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <Popup
              trigger={
                <button className="btn btn-primary fs-4"> Submit </button>
              }
              modal
              position="center center"
              contentStyle={{
                width: "400px",
                backgroundColor: "#59e57aff",
                padding: "25px",
                borderRadius: "15px",
                textAlign: "center",
              }}
            >
              <h3>Your blog was added</h3>
              <button className="btn btn-success">
                <Link to="/AddBlog">Close</Link>
              </button>
            </Popup>
          </form>
        </center>
      </div>
      <Fooder />
    </>
  );
}

export default Blog_add;