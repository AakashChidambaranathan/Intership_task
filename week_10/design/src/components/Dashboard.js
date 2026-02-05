import { Chart as ChartJS } from "chart.js/auto";
import {Bar,Doughnut,Line,Pie,Radar,Scatter,Bubble,Chart,} from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {BoxPlotController,BoxAndWiskers,} from "chartjs-chart-box-and-violin-plot";
import Business from "../Data/Data/business.json";
import Finance from "../Data/Data/Financedata.json";
import Students from "../Data/Data/Student.json";
import Activities from "../Data/Data/activitiesData.json";
import bubbleData from "../Data/Data/bubbleData.json";
import scatterDatas from "../Data/Data/ScatterData.json";
import { data } from "react-router-dom";
import { Chart as ChartComponent } from "react-chartjs-2";

ChartJS.register(ChartDataLabels);

function Dashboard() {
  const labels = ["Tamil", "English", "Maths", "Computer", "Social"];
  const Mark = [89, 94, 23, 45, 50];
  const student = Students[0];
  const marks = student.Marks;
  const bubble = bubbleData[0];
  const scatter = scatterDatas[0];
  const markss=[54,65,46,75,75];
  const boxDataa=[54,53,56,78,100];
  return (
    <div
      className="container-fluid p-4"
      style={{
        backgroundColor: "#8295a8",
        maxHeight: "90.6vh",
        overflow: "scroll",
      }}
    >
      <div className="row g-4">
        <div className="col-12 col-md-6 col-xl-4">
          <div className="card shadow h-100 rounded-4">
            <div className="card-body">
              <h5 className="text-center mb-3">Pie Chart</h5>
              <Pie
                data={{
                  labels,
                  datasets: [
                    {
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

        <div className="col-12 col-md-6 col-xl-4">
          <div className="card shadow h-100 rounded-4">
            <div className="card-body">
              <h5 className="text-center mb-3">Student Marks</h5>
              <Doughnut
                data={{
                  labels: marks.map((m) => m.subject),
                  datasets: [
                    {
                      data: marks.map((m) => m.Mark),
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

        <div className="col-12 col-md-6 col-xl-4">
          <div className="card shadow h-100 rounded-4">
            <div className="card-body">
              <h5 className="text-center mb-3">Area Chart</h5>
              <Line
                data={{
                  labels: Finance.map((i) => i.label),
                  datasets: [
                    {
                      label: "Income",
                      data: Finance.map((i) => i.income),
                      borderColor: "#20B2AA",
                      fill: true,
                      backgroundColor: "#20B2AA4D",
                    },
                    {
                      label: "Outflow",
                      data: Finance.map((i) => i.outflow),
                      borderColor: "#FF6347",
                      fill: true,
                      backgroundColor: "#FF63474D",
                    },
                  ],
                }}
                options={{ plugins: { datalabels: false } }}
              />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-xl-6">
          <div className="card shadow h-100 rounded-4">
            <div className="card-body">
              <h5 className="text-center mb-3">Bar Chart</h5>
              <Bar
                data={{
                  labels: Business.map((i) => i.label),
                  datasets: [
                    {
                      label: "Product",
                      data: Business.map((i) => i.value),
                      backgroundColor: ["#0000FF", "#13e58e", "#e511de"],
                      borderRadius: 6,
                    },
                  ],
                }}
                options={{ plugins: { datalabels: false } }}
              />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-xl-6">
          <div className="card shadow h-100 rounded-4">
            <div className="card-body">
              <h5 className="text-center mb-3">Radar Chart</h5>
              <Radar
                data={{
                  labels: Activities.map((i) => i.label),
                  datasets: [
                    {
                      label: "Team A",
                      data: [65, 59, 56, 45, 65, 75, 45],
                      borderColor: "#9f149d",
                      backgroundColor: "rgba(159,20,157,0.2)",
                    },
                    {
                      label: "Team B",
                      data: [65, 65, 63, 63, 56, 35, 53],
                      borderColor: "#391010",
                      backgroundColor: "rgba(57,16,16,0.2)",
                    },
                  ],
                }}
                options={{ plugins: { datalabels: false } }}
              />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card shadow h-100 rounded-4">
            <div className="card-body">
              <h5 className="text-center mb-3">Scatter Chart</h5>
              <Scatter
                data={{
                  datasets: [
                    {
                      label: "Scatter Data",
                      data: scatter.ScatterMarks,
                      backgroundColor: "#ff6384",
                    },
                  ],
                }}
                options={{ plugins: { datalabels: false } }}
              />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card shadow h-100 rounded-4">
            <div className="card-body">
              <h5 className="text-center mb-3">Bubble Chart</h5>
              <Bubble
                data={{
                  datasets: [
                    {
                      label: bubble.Name,
                      data: bubble.BubbleMarks,
                      backgroundColor: "#a14207",
                    },
                  ],
                }}
                options={{ plugins: { datalabels: false } }}
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="card shadow- h-100 rounded-4">
            <div className="card-body">
              <h5 className="text-center mb-3">Line chart</h5>
              <Line
                data={{
                  labels: Finance.map((item) => item.label),
                  datasets: [
                    {
                      label: "Income",
                      data: Finance.map((item) => item.income),
                      borderColor: "#16c7a7",
                    },
                    {
                      label: "OverFlow",
                      data: Finance.map((item) => item.outflow),
                      borderColor: "#9a0808",
                    },
                  ],
                }}
                options={{
                  plugins: {
                    datalabels: false,
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
