import React from "react";
import OverView from "./Overview";
import CurrentPriceInfo from "./CurrentPriceInfo";
import TimeSeries from "./TimeSeries";
import useDataFetch from "../../utils/useDataFetch";
import NoData from "../NoData";
import Loader from "../Loader";


function StockDetailInfo({symbol}) {
    const {data = {}, loading, error} = useDataFetch("detail", symbol);
    const {
        noData,
        apiData
    } = data;

    const Symbol = apiData["Symbol"];

    if (noData) {
        return <NoData />
    }

    if (loading) {
        return <Loader /> 
    }

    return (
        <section className="StockDetailInfo">
            {Symbol &&
                <>
                    <OverView data={apiData} error={error} loading={loading}/>
                    <CurrentPriceInfo symbol={symbol}/>
                    <TimeSeries symbol={symbol}/>
                </> 
            }
            
        </section>
    )
}

export default StockDetailInfo; 