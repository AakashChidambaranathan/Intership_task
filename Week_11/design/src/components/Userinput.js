import React, { useState } from "react";
import { Bar, Pie, Doughnut, Line } from "react-chartjs-2";
import "chart.js/auto";
function Userinput() {
    const [marks, setMarks] = useState({
        Total_Applications: "",
        Shortlisted: "",
        Interviews: "",
        Rejected: "",
        Padding: "",
    });
    const [showChart, setShowChart] = useState(false);
    const [chartType, setChartType] = useState("pie");
    const handleChange = (e) => {
    setMarks({ ...marks, [e.target.name]: e.target.value });
    };
    const handleSubmit = () => {
    const values = Object.values(marks);
    const hasData = values.some((val) => val !== "");
    setShowChart(hasData);
    };
    const labels = Object.keys(marks);
    const dataValues = Object.values(marks);
    const chartData = {
    labels,
    datasets: [
        {
        label: "Marks",
        data: dataValues,
        backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#9966FF",
        ],
        borderColor: "#333",
        borderWidth: 1,
        },
    ],
    };
    const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        datalabels: {
        color: "#ffffff",
        font: { weight: "bold" },
        formatter: (value, ctx) =>
            `${ctx.chart.data.labels[ctx.dataIndex]} (${value})`,
        },
    },
    };
    const renderChart = () => {
    switch (chartType) {
        case "bar":
        return <Bar data={chartData} options={commonOptions} />;
        case "doughnut":
        return <Doughnut data={chartData} options={commonOptions} />;
        case "line":
        return <Line data={chartData} options={commonOptions} />;
        default:
        return <Pie data={chartData} options={commonOptions} />;
    }
    };
    return (
      <div
        className="container-fluid mt-4"
        style={{ maxHeight: "100vh", overflow: "scroll", maxWidth: "100vw" }}
      >
        <div className="text-center text-primary mb-3">
          <h4> 💼 Application Chart</h4>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              {labels.map((subject) => (
                <div className="input-group input-group-sm mb-3" key={subject}>
                  <span className="input-group-text w-50 justify-content-center">
                    {subject}
                  </span>
                  <input
                    type="number"
                    name={subject}
                    className="form-control"
                    value={marks[subject]}
                    onChange={handleChange}
                  />
                </div>
              ))}

              <div className="d-flex justify-content-between mt-3">
                <button
                  className={`btn ${
                    chartType === "pie" ? "btn-primary" : "btn-outline-primary"
                  }`}
                  onClick={() => setChartType("pie")}
                  title="Pie Chart"
                >
                  🥧 Pic
                </button>

                <button
                  className={`btn ${
                    chartType === "bar" ? "btn-primary" : "btn-outline-primary"
                  }`}
                  onClick={() => setChartType("bar")}
                  title="Bar Chart"
                >
                  📊 Bar
                </button>

                <button
                  className={`btn ${
                    chartType === "doughnut"
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() => setChartType("doughnut")}
                  title="Doughnut Chart"
                >
                  🍩 Doughnut
                </button>

                <button
                  className={`btn ${
                    chartType === "line" ? "btn-primary" : "btn-outline-primary"
                  }`}
                  onClick={() => setChartType("line")}
                  title="Line Chart"
                >
                  📈 Bar
                </button>
              </div>

              <div className="d-grid mt-4">
                <button className="btn btn-success" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="card shadow-sm p-3" style={{ height: "70vh" }}>
              {showChart ? (
                <div style={{ height: "100%" }}>{renderChart()}</div>
              ) : (
                <div className="h-100 d-flex align-items-center justify-content-center">
                  <p className="text-danger fw-bold">
                    Please enter data and submit to view chart
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Userinput;
