import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DEVURL } from "../constants/global";

const Records = (props) => (
  <div className="record-card">
    <img src={`/listings/${props.record.photo}.png`} alt="record" />
    <h3>
      <Link to={`/record/${props.record._id}`}>{props.record.name}</Link>
    </h3>
    <p>{props.record.about}</p>
    <p>{props.record.address}</p>
    <p>{props.record.phone}</p>
    <p>{props.record.price} Night</p>
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
