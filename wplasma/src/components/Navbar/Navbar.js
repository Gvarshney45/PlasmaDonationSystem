import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { UserContext } from "../../App";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  console.log(state);
  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Home <span class="sr-only">(current)</span>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" to="/vaccine">
              Vaccine
            </NavLink>
          </li>

          <li class="nav-item">
            <NavLink className="nav-link" to="/dashboard">
              Dashboard
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" to="/logout">
              Logout
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Home <span class="sr-only">(current)</span>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" to="/vaccine">
              Vaccine
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" to="/receiverlist">
              Requester
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" to="/donorlist">
              Donor
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" to="/signup">
              Register
            </NavLink>
          </li>
        </>
      );
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand " to="/">
          <span className="border border-white bg-info rounded-pill ">
            Plasma
          </span>{" "}
          Donation
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <RenderMenu />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
