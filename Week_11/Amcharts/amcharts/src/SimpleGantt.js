import { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function SimpleGantt() {
  useLayoutEffect(() => {
    const root = am5.Root.new("chartdiv");
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true
      })
    );
    const yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "task",
        renderer: am5xy.AxisRendererY.new(root, {
          inversed: true
        })
      })
    );
    const xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "day", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {})
      })
    );
    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        openValueXField: "start",
        valueXField: "end",
        categoryYField: "task"
      })
    );
    const data = [
      {
        task: "Planning",
        start: new Date(2026, 0, 1).getTime(),
        end: new Date(2026, 0, 3).getTime()
      },
      {
        task: "Development",
        start: new Date(2026, 0, 4).getTime(),
        end: new Date(2026, 0, 10).getTime()
      },
      {
        task: "Testing",
        start: new Date(2026, 0, 11).getTime(),
        end: new Date(2026, 0, 14).getTime()
      }
    ];
    yAxis.data.setAll(data);
    series.data.setAll(data);
    return () => {
      root.dispose();
    };
  }, []);
  return <div id="chartdiv" style={{ width: "100%", height: "400px" }} />;
}
export default SimpleGantt;
