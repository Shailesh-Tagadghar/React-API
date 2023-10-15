import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Student() {
    // var x =5;
    const [data, setData] = useState([]);

    var refreshListing = () => {
        fetch(`http://localhost:8989/students`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                console.table(result)
                setData(result)
            })
    }

    useEffect(() => {
        // setData([{ "name": "shailesh", "age": 21, "city": "shahad" },
        // { "name": "Monika", "age": 20, "city": "Panvel" }]);

        // fetch("http://localhost:8989/students")
        //     .then(res => res.json())
        //     .then(result => {
        //         console.log(result);
        //         console.table(result)
        //         setData(result)
        //     })
        refreshListing()
    }, [])

    var deleteRec = (id) => {
        alert("Delete Record Id : " + id)

        fetch(`http://localhost:8989/students?id=${id}`, {
            "method": "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                refreshListing()
            })
    }

    var addRec = (id,name,age,city) => {
        alert('Add record');

        fetch(`http://localhost:8989/students` , {"method" : "POST"})
        .then(res => res.json())
        .then(result => {
            console.log(result);
            refreshListing();
        })
    }
    return (
        <>
            {/* {JSON.stringify(data)} */}
            <table border={2} cellPadding={5} cellSpacing={2}>
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
                            return <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{x.name}</td>
                                <td>{x.age}</td>
                                <td>{x.city}</td>
                                <td><button onClick={() => { deleteRec(x._id) }} className='btn btn-danger'>Delete</button></td>
                            </tr>;
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
