import axios from "axios";
import { useState } from "react";
import React from "react";

export default function ResponseStructure() {
    var outputRes;
    const [responseObj, setResponseObj] = useState([]);

    function getResponse(buttonType) {
        if (buttonType == 'get') {
            axios.get("http://localhost:8080/users")
                .then((response) => {
                    setResponseObj(response.data)
                })
                .catch((err) => {
                    console.log("Error occured :", err);
                })
        }
        else {
            setResponseObj([]);
        }
    }
    return (

        <>
            <h1>welcome</h1>
            <button onClick={() => { getResponse("get") }}>Get User Details</button >
            <button onClick={() => { getResponse("clear") }}>Clear</button >
            <ol>
                <table id="result">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Date Of Birth</th>
                        </tr>
                    </thead>

                    {responseObj.map((resObj) => {

                        return (
                            <tr key={resObj.id}>
                                <td>{resObj.id}</td>
                                <td>{resObj.name}</td>
                                <td>{resObj.birthDate}</td>
                            </tr>
                        )
                    })
                    }
                </table>
            </ol>
        </>

    )
}
