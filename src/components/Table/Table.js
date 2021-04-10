import React from "react";
import "./Table.css";
import TableBody from "../TableBody/TableBody";

function Table(props) {
    return (
        <>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col"
                  onClick={props.handleSortBtn}
                  className="dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                >Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col"
                onClick={props.handleSortLoc}
                className="dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                >Location</th>
              </tr>
            </thead>
          <tbody>
            {props.results.map(employee => (
               <TableBody 
                key={employee.login.uuid}
                picture={employee.picture.medium}
                first={employee.name.first}
                last={employee.name.last}
                location={employee.location}
                email={employee.email}
                phone={employee.cell}
               />
            ))}
           
   
  </tbody>
</table>
        </>

    )
}

export default Table;