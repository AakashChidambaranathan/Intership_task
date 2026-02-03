import React from "react";
function App() {
  return (
    <>
      <div>
        <h2 className="text-center text-bg-success">Password Generator</h2>
      </div>
      <div className="container bg-black text-white rounded-3 vh-50 mt-6">
        <div className="d-flex justify-content-between w-100 mt-3">
          <span className="mt-3">Ah%#nai</span>
          <button className="rounded-4 mt-3 btn btn-warning">Copy</button>
        </div>
        <div>
          <label className="d-flex justify-content-center">
            Character Length
          </label>
        </div>
        <div className="d-flex justify-content-center mt-1 ">
          <input type="range" min={4} max={20} className="w-75"></input>
        </div>
        <div className="row mt-3">
          <div className="col-6">
            <input type="checkbox" />
            Use Uppercase
          </div>
          <div className="col-6">
            <input type="checkbox" />
            use Lowercase
          </div>
          <div className="col-6">
            <input type="checkbox" />
            use Numbers
          </div>
          <div className="col-6">
            <input type="checkbox" />
            use Special Character
          </div>
        </div>
        <div className="d-flex justify-content-between w-100 mt-2">
          <label>Strength</label>
          <label>Medium</label>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary btn-sm mb-4 mt-1">
            Create Password
          </button>
        </div>
      </div>
    </>
  );
}
export default App;
