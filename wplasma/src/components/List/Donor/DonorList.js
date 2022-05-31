import React, { useEffect, useState } from "react";
import styles from "./donor.module.css";
import { Link } from "react-router-dom";
const Donor = () => {
  const [donors, setDonors] = useState([
    {
      name: "",
      gender: "",
      age: "",
      bloodgroup: "",
      positivedate: "",
      negativedate: "",
      phone: "",
      state: "",
      city: "",
    },
  ]);

  useEffect(() => {
    getDonors();
  }, []);

  const getDonors = async (id) => {
    let result = await fetch("/api/getdonors");
    result = await result.json();
    setDonors(result);
  };
  const deleteDonor = async (id) => {
    console.warn(id);
    let result = await fetch(`/api/deletedonor/${id}`, {
      method: "DELETE",
    });
    result = await result.json();
    if (result) {
      getDonors();
      alert("Deleted Donor Successfully");
    }
  };

  return (
    <>
      <h1 className={styles.heading}>Donors List</h1>
      <table className={styles.styledtable}>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Blood Group</th>
            <th>
              Date of COVID-19 positive
              <br />
              <center>(yyyy-mm-dd)</center>
            </th>
            <th>
              Date of COVID-19 negative
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
          {donors.map((donor, index) => (
            <tr key={donor._id}>
              <td>{index + 1}</td>
              <td>{donor.name}</td>
              <td>{donor.age}</td>
              <td>{donor.gender}</td>
              <td>{donor.bloodgroup}</td>
              <td>{donor.positivedate.slice(0, 10)}</td>
              <td>{donor.negativedate.slice(0, 10)}</td>
              <td>{donor.phone}</td>
              <td>{donor.state}</td>
              <td>{donor.city}</td>
              <td>
                <button className={styles.button}>
                  <Link
                    to={"/updatedonor/" + donor._id}
                    className={styles.link}
                  >
                    Update
                  </Link>
                </button>
              </td>
              <td>
                <button
                  className={styles.button}
                  onClick={() => deleteDonor(donor._id)}
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

export default Donor;
