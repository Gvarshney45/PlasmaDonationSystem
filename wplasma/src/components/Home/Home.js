import React, { useState, useEffect } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import covidImage from "./covid.png";
import WhoDonate from "./WhoDonate.png";
import Covid19 from "../Covid19/covid19Main";
import { fetchData } from "../../api/index";
import Cards from "../Cards/Cards";
import Footer from "../Footer/footer";
// import Covid from '../Covid/covidDash';
const Home = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchdata() {
      const response = await fetchData();
      setData({ ...response });
    }
    fetchdata();
  }, []);
  return (
    <div className="main">
      <div className="hero-part">
        <section className="hero-section">
          <p>Welcome to </p>
          <h1>Plasma Donation Portal</h1>
        </section>
        <section className="part2">
          Patients all over the world rely on plasma protein therapies to treat
          rare, chronic diseases. These individuals rely on the generosity and
          commitment of plasma donors. You may donate plasma in one of more than
          900 licensed and certified plasma collection centers located in the
          U.S. and Europe. Plasma often is referred to as the "gift of life"
          because it is the essential starting material needed to manufacture
          therapies that help thousands of people worldwide with rare, chronic
          diseases to live healthier, productive and fulfilling lives.
        </section>

        <div className="quote">🩸 Help Others By Donating Plasma 🩸 </div>
      </div>
      {/* <div className="cardmain">
        <Card className="card" data={data} />
        </div> */}
      <div className="covid">
        {/* <div className="Covid2">
          <span>
            <img src={covidImage} style={{ height: "70px" }} alt="COVID-19" />
            <h1>Covid-19 Tracker</h1>
          </span>
        </div> */}
        <Covid19 />
        {/* <Cards data={data} /> */}
      </div>
      <div className="Donate">
        <h1 className="WhoCan">Who can Donate❓</h1>
        <img src={WhoDonate} alt="WhoDonate " className="DonateImg" />
        <br />
        <h4>
          Even though you may be enthusiastic about donating Plasma/blood, you
          may not be eligible. This is determined through an initial screening
          process know more about plasma donation.
        </h4>
        <button className="btn btn-outline-primary ms-2 px-a rounded-pill">
          <NavLink to="/about">Read More📖</NavLink>
        </button>
      </div>
      {/* <div className="Down-main">
        <div className="weDo">
          <h1 className="head">WHAT WE DO?</h1>
          <p>
            We collect the database of potential donors, and potential
            recipients, and share it with the potential donors and needy
            recipients who have registered themselves with our website as and
            when requisition is received.
          </p>
        </div>
        <div className="Disc">
          <h1 className="head-do">DISCLAIMER</h1>
          <p>
            Convalescent plasma therapy is an experimental procedure, that some
            doctors are using for people with severe corona virus disease 2019
            (COVID-19). Please get advised from your treating doctor.
          </p>
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default Home;
