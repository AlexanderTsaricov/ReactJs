import React from "react";
import { useDispatch, useSelector } from "react-redux";

function PayBox() {
    const products = useSelector((state) => state.cart).cart || [];

    const getTotalPrice = () => {
        let price = 0;
        products.map((product) => {
            const productPrice = product.productPrice * product.count;
            price += productPrice;
        });
        return price;
    };

    return (
        <article className="payBox">
            <form action="#" className="payBox_adressBox">
                <h2 className="payBox_adressBox_headText">SHIPPING ADRESS</h2>
                <input type="text" name="" id="" className="payBox_adressBox_input" placeholder="Bangladesh" />
                <input type="text" name="" id="" className="payBox_adressBox_input" placeholder="State" />
                <input type="number" name="" id="" className="payBox_adressBox_input" placeholder="Postcode / Zip" />
                <button className="payBox_adressBox_button">GET A QUOTE</button>
            </form>
            <div className="payBox_paymentBox">
                <p className="payBox_paymentBox_subTotal">
                    SUB TOTAL <span className="payBox_paymentBox_subTotal_price">${getTotalPrice()}</span>
                </p>
                <p className="payBox_paymentBox_grandTotal">
                    GRAND TOTAL <span className="payBox_paymentBox_grandTotal_price">${getTotalPrice()}</span>
                </p>
                <hr className="payBox_paymentBox_line" />
                <button className="payBox_paymentBox_button">PROCEED TO CHECKOUT</button>
            </div>
        </article>
    );
}

export default PayBox;
