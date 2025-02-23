import React from "react";
import Header from "../components/headers/Header";
import ToggleMenu from "../components/ToggleMenu";
import BreadCrumpsBox from "../components/BeadCrumpsBox";
import BigImageBox from "../components/BigImageBox";
import BigProductDiscription from "../components/BigProductDiscription";
import { allProducts } from "../productsData/productLocalCreate";
import Cart from "../components/Card";
import SmallBigFooter from "../components/footers/SmallBigFooter";
import { useState, useEffect } from "react";

function Product() {
    const [smallMonitor, setSmalMonitor] = useState(window.matchMedia("(max-width: 951px)").matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 951px)");
        const changeMedia = (e) => setSmalMonitor(e.matches);
        mediaQuery.addEventListener("change", changeMedia);
    }, []);

    const maxProduct = smallMonitor ? 2 : 3;
    return (
        <>
            <Header />
            <ToggleMenu />
            <BreadCrumpsBox />
            <main>
                <BigImageBox />
                <BigProductDiscription />
                <div className="productCartBox contentCenter productCartMargin">
                    <div className="productCartBox_cartBox">
                        {allProducts.slice(0, maxProduct).map((product) => (
                            <Cart key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </main>
            <SmallBigFooter />
        </>
    );
}

export default Product;
