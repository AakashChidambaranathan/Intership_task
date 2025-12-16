import Header from "./Header";
import Fooder from "./Fooder";
import React from "react";
import { Alert } from "bootstrap";

function ContactPage() {
  return (
    <>
      <center>
        <form className="">
          <table className="m-3">
            <tr>
              <th className="fs-3 p-4 text-end">
                <label for="name">Enter your name :</label>
              </th>
              <td className="fs-3 p-4 ">
                <input type="text" placeholder="First Name"></input>
              </td>
            </tr>
            <tr>
              <th className="fs-3 p-4 text-end">
                <label for="last_name">Enter your last :</label>
              </th>
              <td className="fs-3 p-4">
                <input type="text" placeholder="Last Name"></input>
              </td>
            </tr>
            <tr>
              <th className="fs-3 p-4 text-end">
                <label>Email :</label>
              </th>
              <td className="fs-3 p-4">
                <input type="text" placeholder="Email"></input>
              </td>
            </tr>
          </table>
        </form>
        <button
          className="btn btn-primary fs-4"
          onClick={() => alert("Contact soon")}
        >
          submit
        </button>
      </center>
      <Fooder />
    </>
  );
}

export default ContactPage;
