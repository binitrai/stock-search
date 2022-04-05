import React from "react";
import Navigation from "./Navigation/Navigation";
import "./Layout.css";

function Layout({children}) {
    return (
        <>
            <main className="MainContent">
                {children}
            </main>
        </>
    )
}

export default Layout;