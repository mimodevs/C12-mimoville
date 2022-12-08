import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Record = (props) => (
 <tr>
   <td> <Link className="btn btn-link" to={`/record/${props.record._id}`}>{props.record.name}</Link></td>
   <td>{props.record.about}</td>
   <td>{props.record.address}</td>
   <td>{props.record.price} Night</td>
 </tr>
);
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 useEffect(() => {
   async function getRecords() {
    //  const response = await fetch(`https://mimoville.herokuapp.com/record/`);
     const response = await fetch(`http://localhost:5005/record/`);
     const records = await response.json();
     setRecords(records);
   }
   getRecords();
   return;
 }, [records.length]);


 function RecordPage() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         key={record._id}
       />
     );
   });
 }

 return (
   <div className="container">
     <h1>Record List</h1>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>About</th>
           <th>Address</th>
           <th>Price</th>
         </tr>
       </thead>
       <tbody>{RecordPage()}</tbody>
     </table>
   </div>
 );
}