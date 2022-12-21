import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


export default function PersonDetails (){
    const location = useLocation();
    const person = location.state?.person;
    const id = person.id;
    const navigate = useNavigate();

    const [details, setDetails] = useState([]);

    useEffect(() => {
        axios.get("https://localhost:7031/api/react/" + id)
        .then(result => setDetails(result.data))
    },[id]);

    while(details == null)
    {
       return(
        <></>
       )
    }
    return(
        <div className="container">
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{person.name}</td>
                    </tr>
                    <tr>
                        <th>Number of Books</th>
                        <td>{person.numberOfBooks}</td>
                    </tr>
                    <tr>
                        <th>City</th>
                        <td>{details.city}</td>
                    </tr>
                    <tr>
                        <th>Country</th>
                        <td>{details.country}</td>
                    </tr>
                    <tr>
                        <th>Languages</th>
                        <td>{details.languages?.map((sprak) => (
                            <p>{sprak}</p>
                        ))}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        )
}