import React from "react";
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