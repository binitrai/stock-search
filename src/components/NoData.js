import React from "react";

function NoData({msg = "No Data found"}) {
    return (
        <section className="NoData">
            <h3>{msg}</h3>
        </section>
    )
}

export default NoData;