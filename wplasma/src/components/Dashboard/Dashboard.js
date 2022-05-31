import React, { useEffect, useContext } from "react";
import { useHistory, NavLink } from "react-router-dom";

import "./dashboard.css";
const Dashboard = () => {
  return (
    <>
      <div className="dash1 ">
        <div className="dash1  mt-1 border shadow-lg p-1 mb-2  rounded rounded ">
          <h1 className="dash-text mt-5 mb-3 px-5 ">
            <span className="border border-dark bg-white text-dark rounded rounded-right  rounded-left   dash-text ">
              Dashboard{" "}
            </span>
          </h1>
          <div class="row">
            <div className=" col-sm-3 mt-5 mx-5 px-2 mb-4   ">
              <div className="card  border border-dark text-white rounded-2 card-1">
                <div class="card-body">
                  <h5 class="card-title  ">Donor Form</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <NavLink
                    to="/donorform"
                    class="btn btn-outline-light rounded-pill pb-2 w-100 "
                  >
                    Click Here
                  </NavLink>
                </div>
              </div>
            </div>
            <div class="col-sm-3 mt-5 px-2 mx-5 mb-4 ">
              <div class="card card-2 border border-dark rounded text-white">
                <div class="card-body  ">
                  <h5 class="card-title">Receiver Form</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <NavLink
                    to="/receiverform"
                    class="btn btn-outline-light rounded-pill pb-2 w-100"
                  >
                    Click Here
                  </NavLink>
                </div>
              </div>
            </div>
            <div class="col-sm-3 mt-5 px-2 mx-5 mb-4 ">
              <div class="card card-3 text-white border border-dark rounded">
                <div class="card-body  ">
                  <h5 class="card-title">Donor List</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <NavLink
                    to="/donorlist"
                    class="btn btn-outline-light rounded-pill pb-2 w-100"
                  >
                    Click Here
                  </NavLink>
                </div>
              </div>
            </div>

            <div class="col-sm-3 mt-5 px-2 mx-5 mb-4 ">
              <div class="card card-4 text-white border border-dark rounded">
                <div class="card-body ">
                  <h5 class="card-title">Receiver List</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <NavLink
                    to="/receiverlist"
                    class="btn btn-outline-light rounded-pill pb-2 w-100"
                  >
                    Click Here
                  </NavLink>
                </div>
              </div>
            </div>

            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 320"><path fill="#5000ca" fill-opacity="1" d="M0,64L9.6,53.3C19.2,43,38,21,58,37.3C76.8,53,96,107,115,117.3C134.4,128,154,96,173,74.7C192,53,211,43,230,42.7C249.6,43,269,53,288,58.7C307.2,64,326,64,346,58.7C364.8,53,384,43,403,37.3C422.4,32,442,32,461,48C480,64,499,96,518,138.7C537.6,181,557,235,576,234.7C595.2,235,614,181,634,144C652.8,107,672,85,691,74.7C710.4,64,730,64,749,85.3C768,107,787,149,806,160C825.6,171,845,149,864,149.3C883.2,149,902,171,922,186.7C940.8,203,960,213,979,208C998.4,203,1018,181,1037,165.3C1056,149,1075,139,1094,122.7C1113.6,107,1133,85,1152,96C1171.2,107,1190,149,1210,170.7C1228.8,192,1248,192,1267,165.3C1286.4,139,1306,85,1325,101.3C1344,117,1363,203,1382,202.7C1401.6,203,1421,117,1430,74.7L1440,32L1440,320L1430.4,320C1420.8,320,1402,320,1382,320C1363.2,320,1344,320,1325,320C1305.6,320,1286,320,1267,320C1248,320,1229,320,1210,320C1190.4,320,1171,320,1152,320C1132.8,320,1114,320,1094,320C1075.2,320,1056,320,1037,320C1017.6,320,998,320,979,320C960,320,941,320,922,320C902.4,320,883,320,864,320C844.8,320,826,320,806,320C787.2,320,768,320,749,320C729.6,320,710,320,691,320C672,320,653,320,634,320C614.4,320,595,320,576,320C556.8,320,538,320,518,320C499.2,320,480,320,461,320C441.6,320,422,320,403,320C384,320,365,320,346,320C326.4,320,307,320,288,320C268.8,320,250,320,230,320C211.2,320,192,320,173,320C153.6,320,134,320,115,320C96,320,77,320,58,320C38.4,320,19,320,10,320L0,320Z"></path></svg> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
