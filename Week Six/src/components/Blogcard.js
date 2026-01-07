
function Blogcard({ title, text }) {
  return (
  <>
    <div className="card shadow-sm p-3 mb-4 mx-4 mt-5">
      <div className="card-body">
        <h3 className="card-title fs-5">{title}</h3>
        <p className="card-text fs-6">{text}</p>
        <button className="btn btn-primary fs-6">Read More</button>
      </div>
    </div>
  </>
  );
}

export default Blogcard;