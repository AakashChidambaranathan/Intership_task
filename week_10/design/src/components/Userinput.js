import React, { useState } from "react";
import { Bar, Pie,Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import plugin from "chartjs-plugin-datalabels";

function Userinput() {
    const [marks, setMarks] = useState({
    Tamil: "",
    English: "",
    Maths: "",
    Computer: "",
    Social: "",
    });

    const [showChart, setShowChart] = useState(false);

    const handleChange = (e) => {
    setMarks({ ...marks, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
    const values = Object.values(marks);
    const hasData = values.some((val) => val !== "");

    if (hasData) {
        setShowChart(true);
    } else {
        setShowChart(false);
    }
    };

    const chartData = {
    labels: Object.keys(marks),
    datasets: [
        {
        data: Object.values(marks),
        backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#9966FF",
        ],
        },
    ],
    }
    return (
    <>
        <div style={{maxHeight:"90vh",overflow:"scroll"}}>
        <div className="text-center text-primary mt-4">
            <h4>Show Mark Chart</h4>
        </div>

        <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-5">
                {Object.keys(marks).map((subject) => (
                <div className="input-group input-group-sm mt-3" key={subject}>
                    <span className="input-group-text w-25 justify-content-center">{subject}</span>
                    <input
                    type="number"
                    name={subject}
                    className="form-control"
                    value={marks[subject]}
                    onChange={handleChange}
                    />
                </div>
                ))}
                <div className="d-grid mt-4">
                <button className="btn btn-primary" onClick={handleSubmit}>
                    Submit
                </button>
                </div>
                <div className="border rounded p-3 mt-4 text-center">
                {showChart ? (
                    <Pie data={chartData} options={{
                    plugins:{
                        datalabels:{
                            color:"#fff",
                            font:{weight:"bold"},
                            formatter:(value,ctx)=>
                                `${ctx.chart.data.labels[ctx.dataIndex]} (${value})`
                        }
                    }
                    }} />
                )
                : (
                    <p className="text-danger fw-bold">
                    Please enter data to view chart
                    </p>
                )}
                </div>
            </div>
            </div>
        </div>
        </div>
    </>
    );
}

export default Userinput;
