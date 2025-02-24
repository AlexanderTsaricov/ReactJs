import React from "react";

function BreadCrumpsBox() {
    return (
        <nav className="breadCrumpsBox contentCenter">
            <h1 className="breadCrumpsBox_heading">NEW ARRIVALS</h1>
            <div className="breadCrumpsBox_breadCrumps">
                <a href="/" className="breadCrumpsBox_breadCrumps_link">
                    HOME
                </a>
                <pre className="breadCrumpsBox_breadCrumps_slash"> / </pre>
                <a href="/catalog" className="breadCrumpsBox_breadCrumps_link">
                    MEN
                </a>
                <pre className="breadCrumpsBox_breadCrumps_slash"> / </pre>
                <a href="/catalog" className="breadCrumpsBox_breadCrumps_linkPurple">
                    NEW ARRIVALS
                </a>
            </div>
        </nav>
    );
}

export default BreadCrumpsBox;
