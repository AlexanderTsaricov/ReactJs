import brand_icon from "../../inons/brand_icon.svg";
import search_icon from "../../inons/search_icon.svg";

function SearchBox() {
    return (
        <div className="menu_searchBox">
            <a href="/" className="menu_searchBox_brandIcon">
                <img src={brand_icon} alt="brand" />
            </a>
            <button className="menu_searchBox_searchButton button">
                <img src={search_icon} alt="search" />
            </button>
        </div>
    );
}

export default SearchBox;
