import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
 
export default function Record() {
 const [props, setRecord] = useState({
   name: "",
   about: "",
   address: "",
   price: "",
 });
 const params = useParams();
 
 useEffect(() => {
   async function fetchData() {
     const response = await fetch(`https://mimoville.herokuapp.com/record/${params.id.toString()}`);
     const record = await response.json();
     setRecord(record);
   }
   fetchData();
   return;
 }, [params.id]);

 return (
   <div>
     <h3>Record</h3>
     <p>Name: {props.name}</p>
     <p>{props.about}</p>
     <p>{props.address}</p>
     <p>{props.price}</p>
   </div>
 );
}