import bg from "../assets/7a8466e4d1bfa445f15c4ccc44cf5f62.jpg";

function Blogcard({ title, text }) {
  return (
    <div
      className="p-4"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "3vh",
      }}
    >
      <div className="card shadow-sm p-3 mb-4">
        <div className="card-body">
          <h3 className="card-title fs-5">{title}</h3>
          <p className="card-text fs-6">{text}</p>
          <button className="btn btn-primary fs-6">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Blogcard;
