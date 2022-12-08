import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DEVURL } from "../constants/global";

const RecordsTable = (props) => (
  <tr>
    <td>
      <Link to={`/record/${props.record._id}`}>{props.record.name}</Link>
    </td>
    <td>{props.record._id}</td>
    <td>
      <Link to={`/edit/${props.record._id}`}>Edit</Link> |
      <button
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
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

  async function deleteRecord(id) {
    await fetch(`${DEVURL}/${id}`, {
      method: "DELETE",
    });
    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }
  function renderTableData() {
    return records.map((record) => {
      return (
        <RecordsTable
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }
  return (
    <>
      <h2>Records Admin</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </table>
    </>
  );
}
