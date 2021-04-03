import './App.css';
//import SearchResultContainer from "./components/SearchResultContainer";
import React from "react";
import Navbar from "./components/Navbar/Navbar"
import SearchName from "./components/SearchComponent/SearchName";
import FilterSearch from './components/SearchComponent/FilterSearch';

function App() {
  return (
    <div className="App">
  
        <Navbar />
        <SearchName/>
        <FilterSearch/>

    </div>
  );
}

export default App;
