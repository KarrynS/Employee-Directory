import React from "react";
import "./index.css";

function Search(props) {
    return (
        <>
            <div className="searchForm">
                <form className="form">
                    <input
                        value={props.search}
                        name="search"
                        onChange={props.handleInputChange}
                        type="text"
                        placeholder="Search by name"
                    />
                
                    {/* <select className="form-select" onClick={props.handleSortBtn} aria-label="Default select example">
                        <option selected>Sort by</option>
                        <option value={props.location}>Location</option>
                        <option value={props.first}>Name</option>
                    </select> */}
                </form>
            </div>
        </>
    )
}

export default Search;