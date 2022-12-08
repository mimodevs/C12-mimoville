import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Record = (props) => (
 <tr>
   <td>{props.record.name}</td>
   <td>{props.record.about}</td>
   <td>{props.record.address}</td>
   <td>{props.record.phone}</td>
   <td>{props.record.price} Night</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
     <button className="btn btn-link" onClick={() => { props.deleteRecord(props.record._id); }}>Delete</button>
   </td>
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
 async function deleteRecord(id) {
  //  await fetch(`https://mimoville.herokuapp.com/${id}`, {
  await fetch(`http://localhost:5005/record/${id}`, {
     method: "DELETE"
   });
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
 return (
   <div className="container">
     <h1>Record List</h1>
     <Link className="btn btn-primary" to="/create">
        Create Record
      </Link>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>About</th>
           <th>Address</th>
           <th>Phone</th>
           <th>Price</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
 );
}