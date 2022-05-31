import React, { useEffect, useState } from "react";
import styles from "./receiver.module.css";
import { Link } from "react-router-dom";

const ReceiverList = () => {
  const [requesters, setRequesters] = useState([
    {
      name: "",
      gender: "",
      age: "",
      bloodgroup: "",
      positivedate: "",
      phone: "",
      state: "",
      city: "",
    },
  ]);

  useEffect(() => {
    getReceivers();
  }, []);

  const getReceivers = async () => {
    let results = await fetch("/api/getrequesters");
    results = await results.json();
    setRequesters(results);
  };

  const deleteReceiver = async (id) => {
    console.warn(id);
    let results = await fetch(`/api/deleterequester/${id}`, {
      method: "DELETE",
    });
    results = await results.json();
    if (results) {
      getReceivers();
      alert("Deleted successfully");
    } else {
      alert("Error");
    }
  };

  return (
    <>
      <h1 className={styles.heading}>Request List</h1>

      <table className={styles.styledtable}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Blood Group</th>
            <th>
              Date of COVID-19 positive
              <br />
              <center>(yyyy-mm-dd)</center>
            </th>
            <th>Phone Number</th>
            <th>State</th>
            <th>City</th>
            <th>Update Info</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {requesters.map((receiver, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{receiver.name}</td>
              <td>{receiver.age}</td>
              <td>{receiver.gender}</td>
              <td>{receiver.bloodgroup}</td>
              <td>{receiver.positivedate.slice(0, 10)}</td>
              <td>{receiver.phone}</td>
              <td>{receiver.state}</td>
              <td>{receiver.city}</td>
              <td>
                <button className={styles.button}>
                  <Link
                    to={"/updatereceiver/" + receiver._id}
                    className={styles.link}
                  >
                    Update
                  </Link>
                </button>
              </td>
              <td>
                <button
                  className={styles.button}
                  onClick={() => deleteReceiver(receiver._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ReceiverList;
