import React from "react";

function Loader({customMsg = "Loading..."}) {
    return (
        <section className="Loader">
            <h3>{customMsg}</h3>
        </section>
    )
}

export default Loader;