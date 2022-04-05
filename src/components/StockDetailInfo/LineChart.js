import React from "react";
import { Chart } from "react-google-charts";

function getData(data) {
    const d = data["Time Series (Daily)"] || {};
    const chData = Object.keys(d).map(item => {
        const currItem = d[item];
        const p = currItem["2. high"];
        return [item, Number(p)]
    })
    chData.unshift(["Date", "Price"]);
    console.log("chData", chData);
    return chData
}


const chartOptions = {
  title: "Stock Prices",
  curveType: "function",
  legend: { position: "bottom" },
};

function LineChart({data}) {
    return (
        <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={getData(data)}
            options={chartOptions}
      />
    )
}

export default LineChart;
