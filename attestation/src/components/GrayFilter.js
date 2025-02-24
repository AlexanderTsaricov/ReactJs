import React from "react";
import TrendingFilter from "./grayFilters/TrendingFilter";
import SizeFilter from "./grayFilters/SizeFilter";
import PriceFilter from "./grayFilters/PriceFilter";

function GrayFilter() {
    return (
        <div className="filterBox_grayBox">
            <TrendingFilter />
            <SizeFilter />
            <PriceFilter />
        </div>
    );
}

export default GrayFilter;
