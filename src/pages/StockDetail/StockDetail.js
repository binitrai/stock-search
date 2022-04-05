import React from "react";
import {useParams } from "react-router-dom";
import StockDetailInfo from "../../components/StockDetailInfo/StockDetailInfo";
function StockDetail() {
    let { symbol } = useParams();
    return (
        <>
            <h1>Stock Detail {symbol}</h1>
            <StockDetailInfo symbol={symbol}/>
        </>
    )
}
export default StockDetail;