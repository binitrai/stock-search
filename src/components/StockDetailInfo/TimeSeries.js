import React from "react";
import useDataFetch from "../../utils/useDataFetch";
import LineChart from "./LineChart";

function TimeSeries({symbol}) {
    const {data, loading, error} = useDataFetch("dailyTrend", symbol);
    const {
        noData,
        apiData
    } = data;

    if (noData) {
        return <h2>No Data Found</h2>
    }

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <section className="TimeSeries DetailCard">
            <section className="Card">
                <section className="CardHeader">
                    <strong>Stock price chart</strong>
                </section>
                <section className="CardBody">
                    {
                        data["Time Series (Daily)"] && <LineChart data={apiData}/>
                    }
                </section>
            </section>
        </section>
    )
}

export default TimeSeries;