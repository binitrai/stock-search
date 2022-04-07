import React from "react";

function ErrorMsg({error = "Something Went Wrong!"}) {
    return (
        <section className="ErrorMsg">
            <h3>{error}</h3>
        </section>
    )
}

export default ErrorMsg;