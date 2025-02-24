import React from "react";
import Header from "../components/headers/Header";
import ToggleMenu from "../components/ToggleMenu";
import SmallBreadCrumpsBox from "../components/SmallBreadCrumpsBox";
import CartProductBox from "../components/CartProductBox";
import PayBox from "../components/PayBox";
import SmallBIgFooter from "../components/footers/SmallBigFooter";

function Cart() {
    return (
        <>
            <Header />
            <ToggleMenu />
            <main>
                <SmallBreadCrumpsBox headerText={"SHOPPING CART"} />
                <section className="cartContent contentCenter">
                    <CartProductBox />
                    <PayBox />
                </section>
            </main>
            <SmallBIgFooter />
        </>
    );
}

export default Cart;
