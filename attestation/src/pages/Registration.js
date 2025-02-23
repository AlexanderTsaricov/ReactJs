import React from "react";
import Header from "../components/headers/Header";
import ToggleMenu from "../components/ToggleMenu";
import SmallBreadCrumpsBox from "../components/SmallBreadCrumpsBox";
import RegistrationBox from "../components/RegistrationBox";
import RegReclamBox from "../components/RegReclamBox";
import SmallBIgFooter from "../components/footers/SmallBigFooter";

function Registration() {
    return (
        <>
            <Header />
            <ToggleMenu />
            <SmallBreadCrumpsBox headerText="REGISTRATION" />
            <main className="registrationMain contentCenter">
                <RegistrationBox />
                <RegReclamBox />
            </main>
            <SmallBIgFooter />
        </>
    );
}

export default Registration;
