import { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function SimpleBarChart() {
  useLayoutEffect(() => {
    const root = am5.Root.new("barchart");
    root.setThemes([am5themes_Animated.new(root)]);
    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
      }),
    );
    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "category",
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 30,
        }),
      }),
    );
    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      }),
    );
    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Marks",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        categoryXField: "category",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{category}: {value}",
        }),
      }),
    );
    const data = [
      { category: "Maths", value: 85 },
      { category: "Science", value: 90 },
      { category: "English", value: 75 },
      { category: "Computer", value: 95 },
    ];
    xAxis.data.setAll(data);
    series.data.setAll(data);
    return () => {
      root.dispose();
    };
  }, []);
  return <div id="barchart" style={{ width: "100%", height: "400px" }} />;
}
export default SimpleBarChart;
