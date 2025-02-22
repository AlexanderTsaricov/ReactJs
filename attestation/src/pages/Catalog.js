import React from "react";
import Header from "../components/headers/Header";
import ToggleMenu from "../components/ToggleMenu";
import BreadCrumpsBox from "../components/BeadCrumpsBox";
import FilterBox from "../components/FilterBox";

function Catalog() {
    return (
        <>
            <Header />
            <ToggleMenu />
            <main>
                <BreadCrumpsBox />
                <FilterBox />
            </main>
        </>
    );
}

export default Catalog;
