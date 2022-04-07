import React from "react";
import NoData from "../NoData";
function Card({
    headerText,
    children,
    noData
}) {
    if (noData) {
        return <NoData />
    }
    return (
        <section className="Card">
            <section className="CardHeader">
                <strong>{headerText}</strong>
            </section>
            <section className="CardBody">
                {children}
            </section>
        </section>
    )
}

export default Card;