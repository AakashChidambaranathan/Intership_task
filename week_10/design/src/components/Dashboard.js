import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line, Pie,Radar,Scatter,Bubble} from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Business from "../Data/Data/business.json";
import Finance from "../Data/Data/Financedata.json";
import Students from "../Data/Data/Student.json";
import Activities from "../Data/Data/activitiesData.json"
import data from "../Data/Data/bubbleData.json"
import datas from "../Data/Data/ScatterData.json"
function Dashboard() {
  const labelse = ["Tamil", "English", "Maths", "Computer", "Social"];
  const Mark = [89, 94, 23, 45, 24];
  const student = Students[0];
  const marks = student.Marks;
  const bubble = data[0];
  const ScatterData=datas[0];
  return (
    <div
      className="d-flex flex-wrap justify-content-center align-items-center gap-3 p-4"
      style={{
        backgroundColor: "#8295a8",
        height: "90.6vh",
        overflow: "auto",
      }}
    >
      <div className="col-12 col-md-8 col-xl-6">
        <div
          className="card shadow p-3"
          style={{
            minHeight: "400px",
            borderRadius: "20px",
            background: "#dff4ff",
          }}
        >
          <h5 className="text-center mb-3">Pie Chart</h5>
          <Pie
            data={{
              labels: labelse,
              datasets: [
                {
                  label: "Pie chart",
                  data: Mark,
                  backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4BC0C0",
                    "#9966FF",
                  ],
                },
              ],
            }}
            options={{
              plugins: {
                datalabels: {
                  color: "#fff",
                  font: {
                    weight: "bold",
                    size: 12,
                  },
                  formatter: (value, context) =>
                    `${context.chart.data.labels[context.dataIndex]} (${value})`,
                },
                legend: {
                  position: "top",
                },
              },
            }}
          />
        </div>
      </div>
      <div className="col-12 col-md-8 col-xl-6">
        <div
          className="card shadow p-3 mb-4"
          style={{
            minHeight: "400px",
            borderRadius: "20px",
            backgroundColor: "#dff4ff",
          }}
        >
          <h5 className="text-center mb-3">Line chart</h5>

          <Line
            data={{
              labels: Finance.map((item) => item.label),
              datasets: [
                {
                  label: "Earning",
                  data: Finance.map((item) => item.income),
                  borderColor: "#20B2AA",
                  backgroundColor: "#6A5ACD",
                },
                {
                  label: "Outflow",
                  data: Finance.map((item) => item.outflow),
                  borderColor: "#FF6347",
                  backgroundColor: "#FFA07A",
                },
              ],
            }}
          />
        </div>
      </div>
      <div className="col-12 col-md-8 col-xl-6">
        <div
          className="card shadow p-3"
          style={{
            minHeight: "400px",
            borderRadius: "20px",
            backgroundColor: "#dff4ff",
          }}
        >
          <h5 className="text-center mb-3">Bar chart</h5>
          <Bar
            data={{
              labels: Business.map((item) => item.label),
              datasets: [
                {
                  label: "Product",
                  data: Business.map((item) => item.value),
                  backgroundColor: ["#0000FF", "#13e58e", "#e511de"],
                  borderRadius: 5,
                },
              ],
            }}
          />
        </div>
      </div>
      <div className="col-12 col-md-8 col-xl-6">
        <div
          className="card shadow p-3"
          style={{
            minHeight: "400px",
            borderRadius: "20px",
            backgroundColor: "#dff4ff",
          }}
        >
          <h5 className="text-center mb-3">Mark of Student</h5>
          <Doughnut
            data={{
              labels: marks.map((item) => item.subject),
              datasets: [
                {
                  label: "Aakash",
                  data: marks.map((item) => item.Mark),
                  backgroundColor: [
                    "#606f77",
                    "#02ff20",
                    "#b0b603",
                    "#ff5733",
                    "#3498db",
                  ],
                },
              ],
            }}
          />
        </div>
      </div>
      <div className="col-12 col-md-8 col-xl-6">
        <div
          className="card shadow-3"
          style={{
            minHeight: "400px",
            borderRadius: "20px",
            backgroundColor: "#dff4ff",
          }}
        >
          <h5 className="text-center mb-3">Radar Char</h5>
          <Radar
            data={{
              labels: Activities.map((item) => item.label),
              datasets: [
                {
                  label: "Team A",
                  data: [65, 59, 56, 45, 65, 75, 45],
                  backgroundColor: "#000000",
                  borderColor: "#9f149d",
                },
                {
                  label: "Team B",
                  data: [65, 65, 63, 63, 56, 35, 53],
                  backgroundColor: "#ec3478",
                  borderColor: "#391010",
                },
              ],
            }}
          />
        </div>
      </div>
      <div className="col-12 col-md-8 col-xl-6">
        <div
          className="card shadow-3"
          style={{
            height: "400px",
            borderRadius: "20px",
            backgroundColor: "#dff4ff",
          }}
        >
          <Scatter
            data={{
              labels: Finance.map((item) => item.label),
              datasets: [
                {
                  label: "Scatter Plot",
                  data:ScatterData.ScatterMarks.map(s=>({
                    x:s.x,
                    y:s.y
                  }))
                },
              ],
            }}
          />
        </div>
      </div>
      <div className="col-12 col-md-8 col-xl-6">
        <div
          className="card shadow-3 "
          style={{
            height: "400px",
            borderRadius: "20px",
            backgroundColor: "#dff4ff",
          }}
        >
          <Bubble
            data={{
              labels: marks.map((item) => item.subject),
              datasets: [
                {
                  label: bubble.Name,
                  data: bubble.BubbleMarks.map((b) => ({
                    x: b.x,
                    y: b.y,
                    r: b.r,
                  })),
                  backgroundColor: "#a14207",
                  borderColor: "#31760f",
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
