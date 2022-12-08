import React, { useState } from "react";
import { useNavigate } from "react-router";
export default function Create() {
 const [form, setForm] = useState({
   name: "",
   about: "",
   address: "",
   phone: "",
   price: "",
 });
 const navigate = useNavigate();
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 async function onSubmit(e) {
   e.preventDefault();
   const newPerson = { ...form };
   await fetch("https://mimoville.herokuapp.com/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   });
   setForm({ name: "", about: "", address: "", phone: "", price: "" });
   navigate("/records");
 }
 return (
   <div>
     <h3>Create New Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name</label>
         <input type="text" className="form-control" id="name" value={form.name} onChange={(e) => updateForm({ name: e.target.value })} />
       </div>
       <div className="form-group">
         <label htmlFor="about">About</label>
         <input type="text" className="form-control" id="about" value={form.about} onChange={(e) => updateForm({ about: e.target.value })} />
       </div>
       <div className="form-group">
         <label htmlFor="name">Address</label>
         <input type="text" className="form-control" id="address" value={form.address} onChange={(e) => updateForm({ address: e.target.value })} />
       </div>
       <div className="form-group">
         <label htmlFor="name">Phone</label>
         <input type="text" className="form-control" id="phone" value={form.phone} onChange={(e) => updateForm({ phone: e.target.value })} />
       </div>
       <div className="form-group">
         <label htmlFor="name">Price</label>
         <input type="text" className="form-control" id="price" value={form.price} onChange={(e) => updateForm({ price: e.target.value })} />
       </div>
       <div className="form-group">
         <input type="submit" value="Create person" className="btn btn-primary" />
       </div>
     </form>
   </div>
 );
}