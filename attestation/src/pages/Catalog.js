import React from "react";
import Header from "../components/headers/Header";
import ToggleMenu from "../components/ToggleMenu";
import BreadCrumpsBox from "../components/BeadCrumpsBox";
import FilterBox from "../components/FilterBox";
import BigProductCartBox from "../components/BigProductCartBox";
import BigFooter from "../components/footers/BigFooter";

function Catalog() {
    return (
        <>
            <Header />
            <ToggleMenu />
            <main>
                <BreadCrumpsBox />
                <FilterBox />
                <BigProductCartBox />
            </main>
            <BigFooter />
        </>
    );
}

export default Catalog;
