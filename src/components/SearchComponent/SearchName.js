import React, { Component } from "react";
import "./SearchName.css";

class SearchName extends Component {
    //setting components intial state
    constructor() {
        super();
        this.state = {
            name: ""
        }
    };

    handleInputChange = event => {
        //getting value of input that will trigger the change
        const value = event.target.value;
        const name = event.target.name;

    //Updating the input's state
    this.setState({
        [name]: value
    });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({
            name: ""
        });
    }

    render() {
        return (
            <div>
                <form className="form">
                    <input
                        value={this.state.name}
                        name="name"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Search by employee name"
                        />
                
                    <button onClick={this.handleFormSubmit}>Search</button>
                </form>
            </div>
        );
    }
}

export default SearchName;
