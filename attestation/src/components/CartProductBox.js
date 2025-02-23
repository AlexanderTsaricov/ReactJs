import React from "react";

function CartProductBox() {
    return (
        <article class="cartProductBox">
            <div class="cartProductBox_buttonBox">
                <button class="cartProductBox_buttonBox_button">CLEAR SHOPPING CART</button>
                <a href="/catalog" class="cartProductBox_buttonBox_button">
                    CONTINUE SHOPPING
                </a>
            </div>
        </article>
    );
}

export default CartProductBox;
