import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

export default function StudentEdit() {

    const [SearchParams] = useSearchParams();

    var studentid = SearchParams.get("id");

    const [id, setId] = useState(studentid);
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [city, setCity] = useState("");

    useEffect(() => {
        fetch(`http://localhost:8989/students/${id}`)
        .then(res => res.json())
        .then(result => {
            console.log(result);
            console.table(result)
            setName(result.name)
            setAge(result.age)
            setCity(result.city)
        })
    },[])

    var putData = () => {

        var data = {
            "id" : id,
            "name" : name,
            "age"  : age,
            "city" : city
        }

        // alert(JSON.stringify(data));
        // console.log(data);

        fetch(`http://localhost:8989/students`, {
        method : "PUT",
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(result => {
            window.location.reload()
            console.log(result);
        })
    }

  return (
    <div>
            Name :  <input type='text' value={name} onChange={(e) => { setName(e.target.value) }} /> <br />
            Age  :  <input type='text' value={age} onChange={(e) => { setAge(e.target.value) }} /> <br />
            City :  <input type='text' value={city} onChange={(e) => { setCity(e.target.value) }} /> <br /><br />

            <button onClick={ putData }>Update Student</button>

            <h4>
                Id : {id} <br />
                Name : {name} <br />
                Age  : {age} <br />
                City : {city} <br />
            </h4>
        </div>
  )
}
