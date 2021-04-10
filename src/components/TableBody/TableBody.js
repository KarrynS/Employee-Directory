import React from "react";
import "./TableBody.css"

function TableBody(props) {
    return (
        <>
         <tr>
            <td>
                <img src={props.picture}
                    alt={props.first}
                    className="img-responsive"
                />
            </td>
            <td>{props.first} {props.last}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.location.city}</td>
            <td>{props.gender}</td>
        </tr>
        </>
    )
}

export default TableBody;