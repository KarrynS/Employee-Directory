import React from "react";
import "./index.css";

function Filter(props) {
    return (
        <>
            <div className="searchForm">
                <form className="form">
                    <input
                        value={props.name}
                        name="name"
                        onChange={props.handleInputChange}
                        type="text"
                        placeholder="Search by name"
                    />
                    <select className="form-select" onChange={props.handleSortSubmit} aria-label="Default select example">
                        <option selected>Sort by</option>
                        <option value="location">Location</option>
                        <option value="age">Gender</option>
                    </select>
                </form>
            </div>
        </>
    )
}

export default Filter;