import React, { Component } from "react";
import "./FilterSearch.css";

class FilterSearch extends Component {
    constructor() {
        super();
        this.state = {
            location: "",
            occupation: "",
        }
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({
            location: "", 
            occupation: ""
        });
    }
    
    render() {
        return (
            <div className="filterSearch">
                <select className="form-select" aria-label="Default select example">
                <option selected>Filter by</option>
                <option value={this.state.location}>Location</option>
                <option value={this.state.occupation}>Occupation</option>
                </select>
            </div>
        )
    }
}

export default FilterSearch;