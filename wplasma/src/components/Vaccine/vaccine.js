import React, { useState } from "react";
import axios from "axios";
import "./vaccine.css";
const Vaccine = () => {
  const [vaccines, setVaccine] = useState([]);
  const [query, setQuery] = useState();

  function handleKeydown(e) {
    //   console.log('do validate');
    setQuery(e.target.value);
  }

  const fetchData = async () => {
    const pincode = query;
    //   console.log(pincode);
    var today = new Date(),
      date =
        today.getDate() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear();

    const url =
      "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=" +
      pincode +
      "&date=" +
      date;
    console.log(url);
    try {
      const response = await axios.get(url);
      //   console.log(response.data);
      setVaccine(response.data.sessions);
    } catch (err) {
      alert("No vaccines available");
    }
  };
  return (
    <div className="main1">
      <div className="main2">
        <h1 className="heading">Vaccine Near Me 💉🏥</h1>
        <div>
          <input
            type="text"
            className="field"
            placeholder="Enter Pincode"
            onChange={handleKeydown}
          />
          <button
            className="btn btn-outline-primary ms-auto px-a rounded-pill bg-white"
            onClick={fetchData}
          >
            FIND
          </button>
          <br />
        </div>
      </div>

      <div className="vaccines">
        {vaccines &&
          vaccines.map((v, index) => {
            return (
              <div className="vaccine" key={index}>
                <h3 className="Tname">Hospital Name:- {v.name}</h3>
                <h2 className="Tname">Address:- {v.address}</h2>

                <div className="details">
                  <p className="details">Vaccine Name: {v.vaccine}</p>
                  <p className="details">Date Of Vaccination: {v.date}</p>
                  <p className="details">
                    Minimum Age Limit: {v.min_age_limit}
                  </p>
                  <p className="details">
                    Available Capacity : {v.available_capacity}
                  </p>
                  <p className="details">Block Name: {v.block_name}</p>
                  <p className="details">District Name: {v.district_name}</p>
                  {/* <p className="details">Available Slots : {v.slots}</p> */}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Vaccine;
