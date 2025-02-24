function ToggleMenu() {
    return (
        <div className="toggleMenu toggleMenu_of" id="menu">
            <h1 className="toggleMenu_headHeading">MENU</h1>
            <article className="toggleMenu_category">
                <a href="/catalog" className="toggleMenu_heading">
                    MAN
                </a>
                <a className="toggleMenu_variableMenu" href="/catalog">
                    Accessories
                </a>
                <a className="toggleMenu_variableMenu" href="/catalog">
                    Bags
                </a>
                <a href="/catalog" className="toggleMenu_variableMenu">
                    Denim
                </a>
                <a href="/catalog" className="toggleMenu_variableMenu">
                    T-Shirts
                </a>
            </article>
            <article className="toggleMenu_category">
                <h2 className="toggleMenu_heading">WOMAN</h2>
                <a className="toggleMenu_variableMenu" href="/catalog">
                    Accessories
                </a>
                <a className="toggleMenu_variableMenu" href="/catalog">
                    Jackets & Coats
                </a>
                <a href="/catalog" className="toggleMenu_variableMenu">
                    Polos
                </a>
                <a href="/catalog" className="toggleMenu_variableMenu">
                    T-Shirts
                </a>
                <a href="/catalog" className="toggleMenu_variableMenu">
                    Shirts
                </a>
            </article>
            <article className="toggleMenu_category">
                <h2 className="toggleMenu_heading">KIDS</h2>
                <a className="toggleMenu_variableMenu" href="/catalog">
                    Accessories
                </a>
                <a className="toggleMenu_variableMenu" href="/catalog">
                    Jackets & Coats
                </a>
                <a href="/catalog" className="toggleMenu_variableMenu">
                    Polos
                </a>
                <a href="/catalog" className="toggleMenu_variableMenu">
                    T-Shirts
                </a>
                <a href="/catalog" className="toggleMenu_variableMenu">
                    Shirts
                </a>
                <a className="toggleMenu_variableMenu" href="/catalog">
                    Bags
                </a>
            </article>
        </div>
    );
}

export default ToggleMenu;
