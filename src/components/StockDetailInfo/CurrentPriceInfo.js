import React from "react";
import useDataFetch from "../../utils/useDataFetch";

function CurrentPriceInfo({symbol}) {
    const {data, loading, error} = useDataFetch("currentInfo", symbol);
    const {
        noData,
        apiData = {}
    } = data;

    const CurrentPrice = apiData["Global Quote"] || {};
    const currentPriceKey = "05. price";
    const latestTradingDay = "07. latest trading day"

    if (noData) {
        return <h2>No Data Found</h2>
    }

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <section className="CurrentPriceInfo DetailCard">
               <section className="Card">
                    <section className="CardHeader">
                        <strong>
                            Current Price
                        </strong>
                    </section>
                    <section className="CardBody">
                        <div className="CardRow"><b>Current Price :</b> {CurrentPrice[currentPriceKey]}</div>
                        <div className="CardRow"><b>Latest trading day : </b>{CurrentPrice[latestTradingDay]}</div>
                    </section>
                </section>
        </section>
    )
}

export default CurrentPriceInfo;