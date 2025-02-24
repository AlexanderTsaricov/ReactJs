import HeaderMenu from "./HeaderMenu";
import SearchBox from "./SearchBox";

function Header() {
    return (
        <nav className="menu contentCenter">
            <SearchBox />
            <HeaderMenu />
        </nav>
    );
}

export default Header;
