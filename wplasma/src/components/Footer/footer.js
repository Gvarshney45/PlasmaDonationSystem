import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>What we do? </h2>
                  <p>
                    {" "}
                    We collect the database of potential donors, and potential
                    recipients, and share it with the potential donors and needy
                    recipients who have registered themselves with our website
                    as and when requisition is received.{" "}
                  </p>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>Disclaimer </h2>
                  <p>
                    {" "}
                    Convalescent plasma therapy is an experimental procedure,
                    that some doctors are using for people with severe corona
                    virus disease 2019 (COVID-19). Please get advised from your
                    treating doctor.{" "}
                  </p>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>Quick Links</h2>
                  <ul>
                    <li>
                      <NavLink to="#" class="text-white">
                        About us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/about" class="text-white">
                        Blog
                      </NavLink>
                    </li>
                    <li>
                      <a
                        href="https://data.covid19india.org/data.json"
                        class="text-white"
                        target="_blank"
                      >
                        APIs by Covid19India
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>HelpFul Links </h2>
                  <ul>
                    <li>
                      <a
                        href="https://www.mohfw.gov.in/"
                        class="text-info"
                        target="_blank"
                      >
                        🔗 Ministry of Health and Family Welfare, Gov. of India
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
                        class="text-info"
                        target="_blank"
                      >
                        🔗 MOHFW - HELPLINE NUMBERS [by State]
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
                        class="text-info"
                        target="_blank"
                      >
                        🔗 WHO: COVID-19 Home Page
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html"
                        class="text-info"
                        target="_blank"
                      >
                        🔗 Centers for Disease Control and Prevention (CDC)
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <div className="col-6 col-lg-3"> */}
                {/* <h2>HelpFul Links </h2> */}
                {/* <div className="row"> */}
                {/* <div className="col-3 mx-auto">
                      <a href="#" class="text-white">
                        Ministry of Health and Family Welfare, Gov. of India
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a href="#" class="text-white">
                        <i class="fa fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a href="#" class="text-white">
                        <i class="fa fa-youtube fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a href="#" class="text-white">
                        <i class="fa fa-twitter fontawesome-style"></i>
                      </a> */}
                {/* </div> */}
                {/* </div> */}
                {/* </div> */}
              </div>
              <hr />
              <div className="mt-3 ">
                <p className="main-hero-para text-center w-100">
                  {" "}
                  Copyright. All rights reserved. ©️ Plasma Donation System ❤️
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
