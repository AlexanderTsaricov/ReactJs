import React from "react";
import Filter from "./Filter";
import GrayFilter from "./GrayFilter";

function FilterBox() {
    return (
        <div className="filterBox contentCenter">
            <Filter />
            <GrayFilter />
        </div>
    );
}

export default FilterBox;
