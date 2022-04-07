import React from "react";
import { Chart } from "react-google-charts";

import useDataFetch from "../../utils/useDataFetch";
import DataCard from "../Card/DataCard";

function getData(data) {
    const d = data["Time Series (Daily)"] || {};
    const chData = Object.keys(d).map(item => {
        const currItem = d[item];
        const p = currItem["2. high"];
        return [item, Number(p)]
    })
    chData.unshift(["Date", "Price"]);
    return chData
}


const chartOptions = {
  title: "Stock Prices",
  curveType: "function",
  legend: { position: "bottom" },
};


function TimeSeries({symbol}) {
    const {data, loading, error} = useDataFetch("dailyTrend", symbol);
    const {
        noData,
        apiData
    } = data;
    
    return (
        <DataCard 
            headerText="Stock price chart"
            loading={loading}
            noData={noData}
            error={error}

        >
           {
                apiData["Time Series (Daily)"] && 
                
                <Chart
                        chartType="LineChart"
                        width="100%"
                        height="400px"
                        data={getData(apiData)}
                        options={chartOptions}
                />
           }
        </DataCard>
    )
}

export default TimeSeries;