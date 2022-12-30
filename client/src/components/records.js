import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DEVURL } from "../constants/global";

const Records = (props) => (
  <div className="record-card">
    <Link to={`/record/${props.record._id}`}><img src={`/listings/${props.record.photo}`} alt="record" /></Link>
    <h3>
      <strong>{props.record.name}</strong>
    </h3>
    <p>{props.record.about}</p>
    <p>{props.record.address}</p>
    <p>{props.record.phone}</p>
    <p>{props.record.price} Night</p>
    <Link to={`/record/${props.record._id}`}><button type="button" class="btn btn-success">Book</button></Link>
  </div>
);

export default function FetchRecords() {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`${DEVURL}/record/`);
      const records = await response.json();
      setRecords(records);
    }
    getRecords();
    return;
  }, [records.length]);

  function renderRecords() {
    return records.map((record) => {
      return <Records record={record} key={record._id} />;
    });
  }
  return <div className="records-container">{renderRecords()}</div>;
}
