import React, {Component} from "react";
import Table from "../components/Table/Table";
import Filter from "../components/Search/index";
import API from "../utils/API";

class Employees extends Component {
    state = {
        location: "",
        occupation: "",
        name: "",
        results: []
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    handleSortSubmit = event => {
        event.preventDefault();
    }

    componentDidMount() {
        this.searchEmployee();
    }

    searchEmployee = (query) => {
        API.employeeSearch(query)
        .then(res =>
            this.setState({ results: res.data.results }))
            .then(res => console.log(res))
        .catch(err => console.log(err));
    };

    render() {
        return (
            <>  
                <Filter
                name={this.state.name}
                handleInputChange={this.handleInputChange}
                location={this.state.location} 
                occupation={this.state.occupation} 
                  
                handleSortSubmit={this.handleSortSubmit}
                /> 
               
                <Table results={this.state.results}/> 
            </>
        )
    }
   
}

export default Employees;