import { Pie, Doughnut, Line } from "react-chartjs-2";
import "chart.js/auto";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../Studentdata/dashboardData.json";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart as ChartJS } from "chart.js";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { useLayoutEffect, useRef } from "react";
ChartJS.register(ChartDataLabels);
function JobGantt({ applications }) {
  const chartRef = useRef(null);
  useLayoutEffect(() => {
    const root = am5.Root.new(chartRef.current);
    root.setThemes([am5themes_Animated.new(root)]);
    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
      }),
    );
    const yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "task",
        renderer: am5xy.AxisRendererY.new(root, {}),
      }),
    );
    const xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "day", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {}),
      }),
    );
    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        xAxis,
        yAxis,
        openValueXField: "start",
        valueXField: "end",
        categoryYField: "task",
      }),
    );
    series.columns.template.setAll({
      height: am5.percent(70),
      tooltipText: "{task}\nStatus: {status}",
    });
    const ganttData = applications.map((a) => ({
      task: `${a.company} - ${a.role}`,
      start: new Date(a.appliedDate).getTime(),
      end: new Date(a.lastUpdate).getTime(),
      status: a.status,
      columnSettings: {
        fill:
          a.status === "Shortlisted"
            ? am5.color(0x198754)
            : a.status === "Interview"
              ? am5.color(0x0dcaf0)
              : am5.color(0xdc3545),
      },
    }));
    yAxis.data.setAll(ganttData);
    series.data.setAll(ganttData);
    return () => root.dispose();
  }, [applications]);
  return <div ref={chartRef} style={{ width: "100%", height: "400px" }} />;
}

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
    if (status === "Shortlisted") return "text-success fw-bold";
    if (status === "Interview") return "text-primary fw-bold";
    if (status === "Rejected") return "text-danger fw-bold";
    return "";
  };

  return (
    <div className="container-fluid bg-light p-4" style={{overflow:"scroll", maxHeight:"87vh"}}>
      <h3 className="text-center mb-4">💼 Job Seeker Dashboard</h3>
      <div className="row g-3 mb-4">
        {Object.entries(data.stats).map(([key, value]) => (
          <div className="col-md-3" key={key}>
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <h6 className="text-capitalize">{key}</h6>
                <h3>{value}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-header text-center fw-bold">
              Skills Distribution
            </div>
            <div className="card-body">
              <Doughnut data={skillsChart} options={{
                plugins:{
                  datalabels:{
                    color:"#fff",
                    font:{weight:"bold"},
                    formatter: (value, ctx) => `${ctx.chart.data.labels[ctx.dataIndex]} (${value})`,
                }}
              }}/>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-header text-center fw-bold">
              Application Status
            </div>
            <div className="card-body">
              <Pie data={statusChart} options={{
                plugins:{
                  datalabels:{
                    color:"#fff",
                    font:{weight:"bold"},
                    formatter:(value,ctx)=>`${ctx.chart.data.labels[ctx.dataIndex]}(${value})`,
                  }
                }
              }}/>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-header text-center fw-bold">
              Monthly Applications
            </div>
            <div className="card-body">
              <Line data={monthlyChart} />
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
      <div className="card shadow-sm mt-5">
        <div className="card-header fw-bold">
          Job Application Timeline (amCharts Gantt)
        </div>
        <div className="card-body">
          <JobGantt applications={data.applications} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
