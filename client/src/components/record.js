import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { DEVURL, FIELDS } from "../constants/global";

const Record = (props) => (
  <div>
     <img src={`/listings/${props.record.photo}`} alt="record" />
    <h3>{props.record.name}</h3>
    <p>{props.record.about}</p>
    <p>Address: {props.record.address}</p>
    <p>Contact: {props.record.phone}</p>
    <p>Price: {props.record.price} Night</p>
    <p>Amenities: {props.record.amenities}</p>
    <p>
      <Link to={`/edit/${props.record._id}`}>Edit</Link> | <Link onClick={() => { props.deleteRecord(); }}>Delete</Link>
    </p>
  </div>
);

export default function FetchRecord() {
  const [record, setRecord] = useState(FIELDS);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${DEVURL}/record/${params.id.toString()}`);
      const record = await response.json();
      setRecord(record);
    }
    fetchData();
    return;
  }, [params.id]);

  async function deleteRecord() {
    await fetch(`${DEVURL}/${params.id}`, { method: "DELETE", });
    navigate("/");
  }

  function renderRecord() {
    return (
      <Record
        record={record}
        deleteRecord={() => deleteRecord(params.id)}
        key={params.id}
      />
    );
  }
  return (
     renderRecord()
  );
}
