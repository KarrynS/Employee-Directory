import React, {Component} from "react";
import Table from "../components/Table/Table";
import Filter from "../components/Search/index";
import API from "../utils/API";

class Employees extends Component {
    state = {
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
        .then(res => {
            console.log(res)
            console.log(res.data.results[0].dob.age)
            this.setState({ results: res.data.results })
        })
        .catch(err => console.log(err));
    };

    render() {
        return (
            <>  
                <Filter
                name={this.state.name}
                handleInputChange={this.handleInputChange}
                // location={this.state.location} 
                handleSortSubmit={this.handleSortSubmit}
                /> 
               
                <Table results={this.state.results}/> 
            </>
        )
    }
   
}

export default Employees;