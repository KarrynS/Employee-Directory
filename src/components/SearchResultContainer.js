import React, { Component } from "react";
import API from "../utils/API";
import ResultsList from "./ResultList";

class SearchResultContainer extends Component {

    state = {
        search: "",
        results: []
      };

    componentDidMount() {
        this.searchEmployee();
    }

    searchEmployee = (query) => {
        API.search(query)
        .then(res => this.setState({ results: res.data.data }))
        .catch(err => console.log(err));
    };

   render() {
        return (
            <div>
                <ResultsList results={this.state.results} />
            </div>
            
        )  
    }
}

export default SearchResultContainer;