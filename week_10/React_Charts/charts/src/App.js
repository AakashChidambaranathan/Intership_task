import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Line, Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";


import Finance from "../src/Data/Financedata.json";
import Business from "../src/Data/business.json";
import Student from "../src/Data/Student.json"
function App() {
  const labels=["Tamil","English","Maths","Computer","Social"];
  const Mark=[89,94,23,45,24];
  return (
    <div
      className="min-vh-100 d-flex flex-wrap justify-content-center align-items-center gap-3 p-4"
      style={{ backgroundColor: "#8295a8" }}
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
              labels: labels,
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
                  position: "bottom",
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
                  label:"Product",
                  data: Business.map((item) => item.value),
                  backgroundColor: ["#0000FF", "#13e58e", "#e511de"],
                  borderRadius: 5,
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
