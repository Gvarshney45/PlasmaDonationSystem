import React, { useState, useEffect } from "react";
import axios from "axios";
import "./covid19.css";
import { Card } from "../Covid19";
// imoport image here
import covidImage from "./covid.png";
const Covid19Main = () => {
  let today = new Date();
  let date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  const [totalIndiaCase, setTotalIndiaCase] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const resp = await axios.get("https://data.covid19india.org/data.json");
    setTotalIndiaCase(resp.data.statewise.slice(0, 1));
  };
  return (
    <div className="mainCovid">
      <span>
        <img src={covidImage} style={{ height: "70px" }} alt="COVID-19" />
        <h1>Covid-19 Tracker</h1>
      </span>
      {/* <h4>As of {date}</h4> */}
      <Card totalIndiaCase={totalIndiaCase} />
    </div>
  );
};

export default Covid19Main;
