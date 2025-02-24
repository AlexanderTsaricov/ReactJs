import React from "react";
import Header from "../components/headers/Header";
import ToggleMenu from "../components/ToggleMenu";
import Logo from "../components/Logo";
import CartReclam from "../components/CartReclam";
import SmallProductCartBox from "../components/SmallProductCartBox";
import { allProducts } from "../productsData/productLocalCreate";
import BigFooter from "../components/footers/BigFooter";

function Home() {
    return (
        <>
            <Header />
            <ToggleMenu />
            <Logo />
            <main>
                <CartReclam />
                <SmallProductCartBox allProducts={allProducts} />
            </main>
            <BigFooter />
        </>
    );
}

export default Home;
