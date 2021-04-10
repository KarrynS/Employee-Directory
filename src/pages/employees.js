import React, {Component} from "react";
import Table from "../components/Table/Table";
import Search from "../components/Search/index";
import API from "../utils/API";

class Employees extends Component {
    state = {
        search: "",
        results: [],
        resultsSearch: [],
    }
    
    componentDidMount() {
        this.searchEmployee();
    }

    searchEmployee = () => {
        API.employeeSearch()
        .then(res => {
            // console.log(res)
            // console.log((res.data.results[0].dob.age))
            this.setState({ 
                results: res.data.results,
                resultsSearch: res.data.results,
          
            })
        })
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });

        const employeeSearch = this.state.resultsSearch.filter((employee) => {
            return employee.name.first.toLowerCase().includes(value.toLowerCase()) || employee.name.last.toLowerCase().includes(value.toLowerCase())
        })
        this.setState({ results : employeeSearch})
        console.log("searchInput", employeeSearch)
    };


    handleSortName = () => {
        const resultsbyName = this.state.results.sort((a,b) => {
            return a.name.first.localeCompare(b.name.first)
        })
        this.setState({ results: resultsbyName })
        console.log("resultsName", resultsbyName)
    }

    handleSortLoc = () => {
        const resultsbyLoc = this.state.results.sort((a,b) => {
            return a.location.localeCompare(b.location)
        })
        this.setState({ results: resultsbyLoc })
        console.log("resultsLoc", resultsbyLoc)
    }

    render() {
        return (
            <>  
                <Search
                // search={this.state.search}
                results={this.state.results}
                handleInputChange={this.handleInputChange}
                /> 
               
                <Table 
                results={this.state.results}
                // search={this.state.search}
                handleSortNam={this.handleSortName}
                handleSortLoc={this.handleSortLoc}
                /> 
            </>
        )
    }
   
}

export default Employees;