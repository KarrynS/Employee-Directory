import './App.css';
//import SearchResultContainer from "./components/SearchResultContainer";
import React from "react";
import Navbar from "./components/Navbar/Index"
import Employees from "./pages/employees";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Employees />
    </div>
  );
}

export default App;
