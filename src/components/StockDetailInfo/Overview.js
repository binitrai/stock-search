import React from "react";

function Overview({data, loading, error}) {
    const {
        Symbol,
        Name,
        Description,
        MarketCapitalization,
        PERatio,
        Currency
    } = data;
    if (!Symbol) {
        return (
            <h2>No Data found</h2>
        )
    }
    return (
        <section className="Overview DetailCard">
            {loading ? "Loading Overview" : 
               <section className="Card">
                   <section className="CardHeader">
                        <strong>Overview {Symbol}</strong>
                   </section>
                   <section className="CardBody">
                        <div className="CardRow"><b>Name :</b> {Name}</div>
                        <div className="CardRow des"><b>Description : </b> {Description}</div>
                        <div className="CardRow"><b>Market Capitalization : </b>{MarketCapitalization}</div>
                        <div className="CardRow"><b> P/E Ratio : </b>{PERatio}</div>
                        <div className="CardRow"><b> Currency : </b>{Currency}</div>
                   </section>
               </section>
            }
            {
                error && error

            }
        </section>
    )
}

export default Overview;