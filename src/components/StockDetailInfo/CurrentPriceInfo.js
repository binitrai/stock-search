import React from "react";
import useDataFetch from "../../utils/useDataFetch";
import DataCard from "../Card/DataCard";

const dataToRender = {
    "05. price" : "Current Price",
    "07. latest trading day" : "Latest trading day",
}

function CurrentPriceInfo({symbol}) {
    const {data, loading, error} = useDataFetch("currentInfo", symbol);
    const {
        noData,
        apiData = {}
    } = data;
    const CurrentPrice = apiData["Global Quote"];
    console.log(CurrentPrice, "CurrentPrice");
    return (
        <DataCard 
            headerText="Current Price"
            loading={loading}
            noData={noData}
            error={error}

        >
            { CurrentPrice && 
                Object.keys(dataToRender).map(row => {
                    return <div key={row} className="CardRow">
                                <b>
                                    {dataToRender[row]} :
                                </b> 
                                {CurrentPrice[row]}
                            </div>
                })
            }
        </DataCard>
    )
}

export default CurrentPriceInfo;