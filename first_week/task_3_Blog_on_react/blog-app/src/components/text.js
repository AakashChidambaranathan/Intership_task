import Fooder from "./Fooder";
import Popup from "reactjs-popup";
import { useState } from "react";
function Blog_add() {
  const [name, setName] = useState("");
  const [overView, setOverview] = useState("");
  const [errors, setErrors] = useState({});
  const [successOpen, setSuccessOpen] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!name.trim()) newErrors.name = "      fill this";
    if (!overView.trim()) newErrors.overView = "      fill this";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccessOpen(true);
    }
  };
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 200); // show after scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="overflow-auto" style={{ maxHeight: "72vh" }}>
        <center>
          <form onSubmit={handleSubmit}>
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <small>{errors.name}</small>}
                  </td>
                </tr>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label>Enter your last :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input id="last_name" type="text" placeholder="Last Name" />
                  </td>
                </tr>
                <tr>
                  <th className="fs-3 p-4 text-end">
                    <label htmlFor="email">Email :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input id="email" type="email" placeholder="Email" />
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
                    <input id="phone" type="number" placeholder="Phone no" />
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
                    <label>Write about overView* :</label>
                  </th>
                  <td className="fs-3 p-4">
                    <input
                      id="overview"
                      type="text"
                      placeholder="Overview"
                      value={overView}
                      onChange={(e) => setOverview(e.target.value)}
                    />
                    {errors.overView && (
                      <small>
                        <div className="text-danger">{errors.overView}</div>
                      </small>
                    )}
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
                    <input id="address" type="text" placeholder="Address" />
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
            <div colSpan="2" className="text-center p-4 fs-3">
              <button type="submit" className="btn btn-primary fs-3">
                submit
              </button>
            </div>
          </form>
        </center>
      </div>
      <Popup
        open={successOpen}
        modal
        position="top-center"
        contentStyle={{
          width: "800px",
          padding: "100px",
          borderRadius: "15px",
          background: "blue",
          boxShadow: " 25px",
        }}
      >
        <div className="text-center">
          <h1 style={{ color: "gray", marginBottom: "10px" }}>
            blog was added
          </h1>
          <p>successfully</p>
          <button
            className="btn btn-success"
            style={{ width: "120px" }}
            onClick={() => window.location.reload()}
          >
            close
          </button>
        </div>
      </Popup>
      <Fooder />
    </>
  );
}
export default Blog_add;
