import { useState } from "react";
function App() {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [timeTaken, setTimeTaken] = useState(null);
  const sendRequest = async () => {
    setLoading(true);
    setError("");
    setResponse("");
    setTimeTaken(null);
    const startTime = performance.now();
    try {
      const res = await fetch(url, { method });
      const data = await res.json();
      const endTime = performance.now();
      setTimeTaken((endTime - startTime).toFixed(2));
      setResponse(JSON.stringify(data, null, 2));
    } catch (err) {
      setError("Invalid URL or Network Error");
    } finally {
      setLoading(false);
    }
  };
  if(true){
    console.log("it's working")
  }
  return (
    <div className="container mt-4">
      <h2 className="text-warning mb-4">Postman Clone</h2>
      <div className="row g-2 mb-3">
        <div className="col-md-2">
          <select
            className="form-select"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            <option>GET</option>
            <option>POST</option>
            <option>PUT</option>
            <option>DELETE</option>
          </select>
        </div>
        <div className="col-md-8">
          <input
            type="text"
            className="form-control"
            placeholder="Enter request URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <button
            className="btn btn-primary w-100"
            onClick={sendRequest}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
      {timeTaken && (
        <div className="alert alert-info">
          ⏲️ Time Taken: <strong>{timeTaken} ms</strong>
        </div>
      )}
      <div className="card">
        <div className="card-header fw-bold">Response</div>
        <div className="card-body">
          {error && <div className="alert alert-danger">{error}</div>}
          <pre className="bg-dark text-success p-3 rounded">
            {response || "Response will appear here"}
          </pre>
        </div>
      </div>
    </div>
  );
}


export default App;
