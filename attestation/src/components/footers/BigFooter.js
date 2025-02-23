import React from "react";
import FirstFooter from "./footerMuduls/FirstFooter";
import SecondFooter from "./footerMuduls/SecondFooter";
import LastFooter from "./footerMuduls/LastFooter";

function BigFooter() {
    return (
        <footer class="bigFooter">
            <FirstFooter />
            <SecondFooter />
            <LastFooter />
        </footer>
    );
}

export default BigFooter;
