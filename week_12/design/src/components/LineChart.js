import { useEffect,useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from"@amcharts/amcharts5/percent";
import { data } from "react-router-dom";


const LineChart=()=>{
  const chartRef=useRef(null);
  useLayoutEffect(()=>{
    const root=am5.Root.new(chartRef.current);
    const chart=root.container.children.push(
      am5percent.PieChart.new(root,{})
    );
    const series=chart.series.push(
      am5percent.PieChart.new(root,{
        valueField:"Value",
        categoryFiled:"browser"
      })
    )

    series.data.setAll(data);
    return ()=>root.dispose();
  },[]);
  return <div ref={chartRef} style={{height:"300px"}}/>
}

export default LineChart;