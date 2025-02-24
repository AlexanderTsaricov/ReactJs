import React, { useEffect, useState } from "react";
import Cart from "./Card";
import { useSelector } from "react-redux";
import { allProducts } from "../productsData/productLocalCreate";
/**
 * The function will split the array of products into parts with the number of products specified in countInOneSlice
 * @param {Array} products - array with all data products
 * @param {Number} countInOneSlice - count products in one silce
 */
function getSliceProducts(products, countInOneSlice) {
    let result = [];
    let startIndex = 0;
    let endIndex = countInOneSlice;
    const resultCountIndex = Math.ceil(products.length / countInOneSlice);
    for (let index = 0; index < resultCountIndex; index++) {
        result.push(products.slice(startIndex, endIndex));
        if (index + 1 == resultCountIndex) {
            endIndex = products.length - 1;
        } else {
            endIndex += countInOneSlice;
        }
        startIndex += countInOneSlice;
    }
    return result;
}

function BigProductCartBox() {
    const [smallMonitor, setSmalMonitor] = useState(window.matchMedia("(max-width: 951px)").matches);
    const filterSettings = useSelector((state) => state.filterSettings);

    const getFiltredProducts = () => {
        let filtredProductsXS = [];
        let filtredProductsS = [];
        let filterdProductsM = [];
        let filterdProductsL = [];
        if (!filterSettings.xs && !filterSettings.s && !filterSettings.m && !filterSettings.l) {
            return allProducts;
        }
        if (filterSettings.xs) {
            filtredProductsXS = allProducts.filter((product) => product.size === "XS");
        }
        if (filterSettings.s) {
            filtredProductsS = allProducts.filter((product) => product.size === "S");
        }
        if (filterSettings.m) {
            filterdProductsM = allProducts.filter((product) => product.size === "M");
        }
        if (filterSettings.l) {
            filterdProductsL = allProducts.filter((product) => product.size === "L");
        }

        const resultFiltredProducts = [
            ...filtredProductsXS,
            ...filtredProductsS,
            ...filterdProductsM,
            ...filterdProductsL,
        ];
        console.log(resultFiltredProducts);
        return resultFiltredProducts;
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 951px)");
        const changeMedia = (e) => setSmalMonitor(e.matches);
        mediaQuery.addEventListener("change", changeMedia);
    }, []);

    let countProducts = smallMonitor ? 8 : 9;

    const slisedProducts = getSliceProducts(getFiltredProducts(), countProducts);
    const [selectedSlice, setSelectedSlice] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            const activeSliceButton = document.getElementById(`sliceButton-${selectedSlice}`);
            const lastActiveSliceButton = document.querySelector(".productCartBox_catalogListButtons_purpleNumber");

            if (lastActiveSliceButton) {
                lastActiveSliceButton.classList.remove("productCartBox_catalogListButtons_purpleNumber");
                lastActiveSliceButton.classList.add("catalogListNumber");
            }

            if (!activeSliceButton) {
                console.log(`Error: элемент с id=sliceButton-${selectedSlice} не найден`);
                return;
            }
            activeSliceButton.classList.remove("catalogListNumber");
            activeSliceButton.classList.add("productCartBox_catalogListButtons_purpleNumber");
        }, 0);
    }, [selectedSlice]);

    const previousSlice = () => {
        if (selectedSlice > 1) {
            setSelectedSlice(selectedSlice - 1);
        }
        console.log("click <");
    };

    const nextSlice = () => {
        if (selectedSlice + 1 <= slisedProducts.length) {
            setSelectedSlice(selectedSlice + 1);
        }
        console.log("click >");
    };

    return (
        <div className="productCartBox contentCenter productCartBoxCatalog">
            <div className="productCartBox_cartBox productCartBoxCatalog" id="cartBox">
                {slisedProducts[selectedSlice - 1].map((product) => (
                    <Cart key={product.id} product={product} />
                ))}
            </div>
            <div className="productCartBox_catalogListButtons">
                <a id="previous" className="arrowSlice" onClick={() => previousSlice()}>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.99512 2L2.99512 7L7.99512 12L6.99512 14L-0.00488281 7L6.99512 0L7.99512 2Z"
                            fill="black"
                        />
                    </svg>
                </a>
                <div className="productCartBox_catalogListButtons_numbersBox" id="numbersBox">
                    {slisedProducts.map((products) => (
                        <a
                            key={slisedProducts.indexOf(products)}
                            className="catalogListNumber"
                            id={`sliceButton-${slisedProducts.indexOf(products) + 1}`}
                            onClick={() => setSelectedSlice(slisedProducts.indexOf(products) + 1)}>
                            {slisedProducts.indexOf(products) + 1}
                        </a>
                    ))}
                </div>
                <a id="next" className="arrowSlice" onClick={() => nextSlice()}>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M-0.00500488 12L4.995 7L-0.00500488 2L0.994995 0L7.995 7L0.994995 14L-0.00500488 12Z"
                            fill="black"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default BigProductCartBox;
