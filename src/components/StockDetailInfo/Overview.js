import React from "react";
import DataCard from "../Card/DataCard";

const dataToRender = {
    "Name" : "Name",
    "Description" : "Description",
    "MarketCapitalization" : "Market Capitalization",
    "PERatio" : "P/E Ratio",
    "Currency" : "Currency"
}

function Overview({data, loading, error}) {
    const {Symbol} = data;
    console.log("Symbol", Symbol);
    return (
        <DataCard 
            headerText={`Overview ${Symbol}`}
            loading={loading}
            noData={!Symbol}
            error={error}

        >
            {
                Symbol &&
                 Object.keys(dataToRender).map(row => {
                    return <div key={row} className="CardRow"><b>{dataToRender[row]} :</b> {data[row]}</div>
                })
            }
        </DataCard>
    )
}

export default Overview;