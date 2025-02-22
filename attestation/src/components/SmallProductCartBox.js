import React from "react";
import Cart from "./Cart";

function SmallProductCartBox({ allProducts }) {
    return (
        <section className="productCartBox contentCenter">
            <div className="productCartBox_headTextBox">
                <h2 className="productCartBox_headTextBox_headText">Fetured Items</h2>
                <p className="productCartBox_headTextBox_text">Shop for items based on what we featured in this week</p>
            </div>
            <div className="productCartBox_cartBox">
                {allProducts.slice(0, 6).map((product) => (
                    <Cart key={product.id} product={product} />
                ))}
            </div>
            <button className="productCartBox_button">Browse All Product</button>
        </section>
    );
}

export default SmallProductCartBox;
