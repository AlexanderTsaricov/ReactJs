import React from "react";
import Header from "../components/headers/Header";
import ToggleMenu from "../components/ToggleMenu";
import BreadCrumpsBox from "../components/BeadCrumpsBox";
import FilterBox from "../components/FilterBox";
import BigProductCartBox from "../components/BigProductCartBox";
import { allProducts } from "../productsData/productLocalCreate";

function Catalog() {
    return (
        <>
            <Header />
            <ToggleMenu />
            <main>
                <BreadCrumpsBox />
                <FilterBox />
                <BigProductCartBox allProducts={allProducts} />
            </main>
        </>
    );
}

export default Catalog;
