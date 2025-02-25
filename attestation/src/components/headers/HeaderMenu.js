import React from "react";
import menu_icon from "../../inons/menu_icon.svg";
import profile_icon from "../../inons/profile_icon.svg";
import basket_icon from "../../inons/basket_icon.svg";
import { useDispatch, useSelector } from "react-redux";

function HeaderMenu() {
    const products = useSelector((state) => state.cart).cart || [];

    const getTotalCount = () => {
        let totalCount = 0;
        products.map((product) => {
            totalCount += product.count;
        });
        if (totalCount > 99) {
            return "99+";
        }
        return totalCount;
    };

    const handleMenu = () => {
        let menu = document.getElementById("menu");

        if (menu.classList.contains("toggleMenu_of")) {
            menu.classList.remove("toggleMenu_of");
        } else {
            menu.classList.add("toggleMenu_of");
        }
    };
    return (
        <div className="menu_headerMenu">
            <button
                className="menu_headerMenu_menuButton button"
                onClick={() => {
                    handleMenu();
                }}>
                <img src={menu_icon} alt="menu" />
            </button>
            <a href="#" className="menu_headerMenu_profileButton">
                <img src={profile_icon} alt="profile" />
            </a>
            <a href="/cart" className="menu_headerMenu_basketButton button">
                <img src={basket_icon} alt="basket" />
                <svg
                    className="menuCartCount_svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.5 19C14.7467 19 19 14.7467 19 9.5C19 4.25329 14.7467 0 9.5 0C4.25329 0 0 4.25329 0 9.5C0 14.7467 4.25329 19 9.5 19Z"
                        fill="#F16D7F"
                    />
                </svg>
                <p className="menuCartCount_count">{getTotalCount()}</p>
            </a>
        </div>
    );
}

export default HeaderMenu;
