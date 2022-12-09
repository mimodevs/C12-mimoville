import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { DEVURL, FIELDS } from "../constants/global";

export default function Edit() {
  const [form, setForm] = useState(FIELDS);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${DEVURL}/record/${params.id.toString()}`);
      const record = await response.json();
      setForm(record);
    }
    fetchData();
    return;
  }, [params.id, navigate]);

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
  async function onSubmit(e) {
    e.preventDefault();
    const editedRecord = {
      name: form.name,
      about: form.about,
      address: form.address,
      phone: form.phone,
      price: form.price,
      photo: form.photo,
      amenities: form.amenities,
    };
    await fetch(`${DEVURL}/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedRecord),
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/");
  }
  return (
    <>
      <h2>Update {form.name}</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="about">About: </label>
          <input
            type="text"
            className="form-control"
            id="about"
            value={form.about}
            onChange={(e) => updateForm({ about: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={form.address}
            onChange={(e) => updateForm({ address: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone: </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={form.phone}
            onChange={(e) => updateForm({ phone: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price: </label>
          <input
            type="text"
            className="form-control"
            id="price"
            value={form.price}
            onChange={(e) => updateForm({ price: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="amenities">Amenities: </label>
          <input
            type="text"
            className="form-control"
            id="amenities"
            value={form.amenities}
            onChange={(e) => updateForm({ amenities: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="photo">Photo File Name: </label>
          <input
            type="text"
            className="form-control"
            id="photo"
            value={form.photo}
            onChange={(e) => updateForm({ photo: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Update Record"
            className="btn btn-primary"
          />
        </div>
      </form>
    </>
  );
}
