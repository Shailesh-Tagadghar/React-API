import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Student() {
    // var x =5;
    const [data, setData] = useState([]);

    useEffect(() => {
        // setData([{ "name": "shailesh", "age": 21, "city": "shahad" },
        // { "name": "Monika", "age": 20, "city": "Panvel" }]);

        fetch("http://localhost:8989/students")
        .then(res => res.json())
        .then(result => {
            console.log(result);
            console.table(result)
            setData(result)
        })
    }, [])
    return (
        <>
            {/* {JSON.stringify(data)} */}
            <table border={1}>
                <thead>
                    <tr>
                        <th>Sr. No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((x, i) => {
                            return <tr>
                                <td>{i+1}</td>
                                <td>{x.name}</td>
                                <td>{x.age}</td>
                                <td>{x.city}</td>
                                <td><button>Delete</button></td>
                            </tr>;
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
