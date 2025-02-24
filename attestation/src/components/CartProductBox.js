import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddedToCartProduct from "./AddedToCartProduct";

function CartProductBox() {
    const products = useSelector((state) => state.cart).cart || [];
    return (
        <article className="cartProductBox">
            {products.map((product) => (
                <AddedToCartProduct product={product} key={product.id} />
            ))}
            <div className="cartProductBox_buttonBox">
                <button className="cartProductBox_buttonBox_button">CLEAR SHOPPING CART</button>
                <a href="/catalog" className="cartProductBox_buttonBox_button">
                    CONTINUE SHOPPING
                </a>
            </div>
        </article>
    );
}

export default CartProductBox;
