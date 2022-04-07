import React from "react";
import ErrorMsg from "../ErrorMsg";
import Loader from "../Loader";
import Card from "./Card";
import "./Card.css";

function DataCard({
    headerText,
    loading,
    error,
    noData,
    children
}) {
    return (
        <section className="DetailCard">
            {
                loading ? 
                    <Loader /> 
                : 
                    <Card headerText={headerText} noData={noData}>
                        {children}
                    </Card>
            }
            {
                error && <ErrorMsg />
            }
        </section>
    )
}

export default DataCard;