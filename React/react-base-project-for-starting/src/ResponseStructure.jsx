import axios from "axios";
import { useState } from "react";
import React from "react";

export default function ResponseStructure() {
    var outputRes;
    const [responseObj, setResponseObj] = useState([]);

    function getResponse(buttonType) {
        if (buttonType == 'get') {
            // https://dummyjson.com/carts/1
            axios.get("https://dummyjson.com/users")
                .then((response) => {
                    console.log(response.data.users);
                    setResponseObj(response.data.users)
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
            {responseObj.length > 0 ?<ol>
                <table id="result">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                        </tr>
                    </thead>

                    {responseObj.map((resObj) => {

                        return (
                            <tr key={resObj.id}>
                                <td>{resObj.id}</td>
                                <td>{resObj.firstName}</td>
                                <td>{resObj.age}</td>
                                <td>{resObj.email}</td>
                               
                            </tr>
                        )
                    })
                    }
                </table>
            </ol>
            : ""
}
        </>

    )
}
