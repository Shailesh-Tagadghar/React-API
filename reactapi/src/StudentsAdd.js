import React, { useState } from 'react'

export default function StudentsAdd() {

    //     const [num, setNum] = useState(1);
    //     const [sqr,setSqr] = useState(1);

    //     var getSquare = () => {
    //         // alert(`Square of ${x} is ${x * x}`)
    //         setSqr(num * num);
    //     }


    //   return (
    //     <div>
    //        Number : <input type='text' onChange={ (e) => setNum(e.target.value) } />
    //        {/* <h6>Current Value of Num is {num}</h6> */}
    //       <button onClick={() => getSquare()}>Get Sqaure</button>
    //       <h5>Square of {num} is {sqr}</h5>
    //     </div>
    //   )

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [city, setCity] = useState("");

    var postData = () => {
        alert(`post is working`)
    }

    return (
        <div>
            Name :  <input type='text' onChange={(e) => { setName(e.target.value) }} /> <br />
            Age  :  <input type='text' onChange={(e) => { setAge(e.target.value) }} /> <br />
            City :  <input type='text' onChange={(e) => { setCity(e.target.value) }} /> <br /><br />

            <button onClick={ postData }>Add Student</button>

            <h4>
                Name : {name} <br />
                Age  : {age} <br />
                City : {city} <br />
            </h4>
        </div>
    )

}
