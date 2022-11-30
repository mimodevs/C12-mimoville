import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
   name: "",
   about: "",
   address: "",
   phone: "",
   price: "",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`https://mimoville.herokuapp.com/record/${params.id.toString()}`);
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }

     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
     setForm(record);
   }
   fetchData();
   return;
 }, [params.id, navigate]);
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedPerson = {
     name: form.name,
     about: form.about,
   };
   // This will send a post request to update the data in the database.
   await fetch(`https://mimoville.herokuapp.com/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
   navigate("/records");
 }
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name: </label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })} />
       </div>
       <div className="form-group">
         <label htmlFor="about">About: </label>
         <input
           type="text"
           className="form-control"
           id="about"
           value={form.about}
           onChange={(e) => updateForm({ about: e.target.value })} />
       </div>
       <div className="form-group">
         <label htmlFor="name">Address: </label>
         <input
           type="text"
           className="form-control"
           id="address"
           value={form.address}
           onChange={(e) => updateForm({ address: e.target.value })} />
       </div>
       <div className="form-group">
         <label htmlFor="name">Phone: </label>
         <input
           type="text"
           className="form-control"
           id="phone"
           value={form.phone}
           onChange={(e) => updateForm({ phone: e.target.value })} />
       </div>
       <div className="form-group">
         <label htmlFor="name">Price: </label>
         <input
           type="text"
           className="form-control"
           id="price"
           value={form.price}
           onChange={(e) => updateForm({ price: e.target.value })} />
       </div>
       <br />
 
       <div className="form-group">
         <input
           type="submit"
           value="Update Record"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}