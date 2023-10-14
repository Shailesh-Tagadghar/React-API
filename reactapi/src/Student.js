import React, { useEffect } from 'react'
import  {useState} from 'react'

export default function Student() {
    // var x =5;
    const [data,setData] = useState([]);

    useEffect(() => {
        setData([{"name":"shailesh", "age":21, "city":"shahad"}]);
    },[])
  return (
    <>
    {JSON.stringify(data)}
    <table border={1}>
        <thead>
            <th>Sr. No</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
        </thead>
        <tbody>
            <td>1</td>
            <td>Shailesh</td>
            <td>21</td>
            <td>Shahad</td>
        </tbody>
    </table>
    </>
  )
}
