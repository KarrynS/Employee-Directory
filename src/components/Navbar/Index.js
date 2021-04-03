import React from "react";
import FilterSearch from "../SearchComponent/FilterSearch";
import SearchName from "../SearchComponent/SearchName";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0">Employee Directory</span>
                </div>
            </nav>

            <div>
            <SearchName/>
            </div>
            <div>
            <FilterSearch/>
            </div>
        </div>

    )
}

export default Navbar;