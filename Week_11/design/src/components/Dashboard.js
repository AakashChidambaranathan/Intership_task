import React from "react";
import { Pie,Bar, Doughnut, Line } from "react-chartjs-2";
import "chart.js/auto";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../Studentdata/dashboardData.json";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart as ChartJS } from "chart.js";
import datalabels from "react-chartjs-2"
ChartJS.register(ChartDataLabels);

function Dashboard() {
  const skillsChart = {
    labels: data.skills.map((s) => s.skill),
    datasets: [
      {
        data: data.skills.map((s) => s.count),
        backgroundColor: ["#0d6efd", "#198754", "#ffc107", "#dc3545"],
      },
    ],
  };

  const monthlyChart = {
    labels: data.monthlyApplications.map((m) => m.month),
    datasets: [
      {
        label: "Applications",
        data: data.monthlyApplications.map((m) => m.applications),
        borderColor: "#0d6efd",
        backgroundColor: "#0d6efd",
        tension: 0.4,
      },
    ],
  };

  const statusChart = {
    labels: ["Shortlisted", "Interview", "Rejected"],
    datasets: [
      {
        data: [
          data.stats.shortlisted,
          data.stats.interviews,
          data.stats.rejected,
        ],
        backgroundColor: ["#198754", "#0dcaf0", "#dc3545"],
      },
    ],
  };
  const getStatusClass = (status) => {
    switch (status) {
      case "Shortlisted":
        return "text-success fw-bold";
      case "Interview":
        return "text-primary fw-bold";
      case "Rejected":
        return "text-danger fw-bold";
      default:
        return "text-secondary fw-bold";
    }
  };
  return (
    <div
      className="container-fluid bg-light p-4"
      style={{ maxHeight: "93vh", overflow: "scroll" }}
    >
      <h3 className="text-center mb-4">💼 Job Seeker Dashboard</h3>
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <h6>Total Applications</h6>
              <h3>{data.stats.totalApplications}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm text-center border-success">
            <div className="card-body">
              <h6>Shortlisted</h6>
              <h3 className="text-success">{data.stats.shortlisted}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm text-center border-primary">
            <div className="card-body">
              <h6>Interviews</h6>
              <h3 className="text-primary">{data.stats.interviews}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm text-center border-danger">
            <div className="card-body">
              <h6>Rejected</h6>
              <h3 className="text-danger">{data.stats.rejected}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-header text-center fw-bold">
              Skills Distribution
            </div>
            <div className="card-body">
              <Doughnut
                data={skillsChart}
                options={{
                  plugins: {
                    datalabels: {
                      color: "#fff",
                      font: { weight: "bold" },
                      formatter: (value, ctx) =>
                        `${ctx.chart.data.labels[ctx.dataIndex]} (${value})`,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-header text-center fw-bold">
              Application Status
            </div>
            <div className="card-body">
              <Pie
                data={statusChart}
                options={{
                  plugins: {
                    datalabels: {
                      color: "#fff",
                      font: { weight: "bold" },
                      formatter: (value, ctx) =>
                        `${ctx.chart.data.labels[ctx.dataIndex]} (${value})`,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-header text-center fw-bold">
              Monthly Applications
            </div>
            <div className="card-body">
              <Line data={monthlyChart} options={{
                plugins:{
                  datalabels:false
                }
              }}/>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow-sm mt-5">
        <div className="card-header fw-bold">Recent Applications</div>
        <div className="card-body table-responsive">
          <table className="table table-hover text-center">
            <thead className="table-dark">
              <tr>
                <th>Company</th>
                <th>Role</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.applications.map((a) => (
                <tr key={a.id}>
                  <td>{a.company}</td>
                  <td>{a.role}</td>
                  <td>{a.location}</td>
                  <td className={getStatusClass(a.status)}>{a.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
