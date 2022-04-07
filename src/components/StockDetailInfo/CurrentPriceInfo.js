import React from "react";
import useDataFetch from "../../utils/useDataFetch";
import DataCard from "../Card/DataCard";

const dataToRender = {
    "05. price" : "Current Price",
    "07. latest trading day" : "Latest trading day",
}

function CurrentPriceInfo({symbol}) {
    const {data, loading, error} = useDataFetch("currentInfo", symbol, 20000);
    const {
        noData,
        apiData = {},
    } = data;
    const CurrentPrice = apiData["Global Quote"];
    return (
        <DataCard 
            headerText="Current Price"
            loading={loading}
            noData={noData}
            error={error}

        >
            { CurrentPrice && 
            <>
                 {Object.keys(dataToRender).map(row => {
                    return <div key={row} className="CardRow">
                                <b>
                                    {dataToRender[row]} :
                                </b> 
                                {CurrentPrice[row]}
                            </div>
                })}

            
               <div className="CardRow"><b>Last refreshed :</b> {new Date().toLocaleTimeString()}</div>
               </>
            }
        </DataCard>
    )
}

export default CurrentPriceInfo;