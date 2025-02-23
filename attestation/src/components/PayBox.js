import React from "react";

function PayBox() {
    return (
        <article class="payBox">
            <form action="#" class="payBox_adressBox">
                <h2 class="payBox_adressBox_headText">SHIPPING ADRESS</h2>
                <input type="text" name="" id="" class="payBox_adressBox_input" placeholder="Bangladesh" />
                <input type="text" name="" id="" class="payBox_adressBox_input" placeholder="State" />
                <input type="number" name="" id="" class="payBox_adressBox_input" placeholder="Postcode / Zip" />
                <button class="payBox_adressBox_button">GET A QUOTE</button>
            </form>
            <div class="payBox_paymentBox">
                <p class="payBox_paymentBox_subTotal">
                    SUB TOTAL <span class="payBox_paymentBox_subTotal_price">$900</span>
                </p>
                <p class="payBox_paymentBox_grandTotal">
                    GRAND TOTAL <span class="payBox_paymentBox_grandTotal_price">$900</span>
                </p>
                <hr class="payBox_paymentBox_line" />
                <button class="payBox_paymentBox_button">PROCEED TO CHECKOUT</button>
            </div>
        </article>
    );
}

export default PayBox;
