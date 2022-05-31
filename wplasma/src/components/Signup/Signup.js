import React, { useState } from "react";
import signpic from "./reg.jpg";
import { NavLink, useHistory } from "react-router-dom";
const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [error, setError] = useState(false);
  let name, value;
  const handleInputs = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    if (!user.name || !user.email || !user.cpassword || !user.password) {
      setError(true);
      return false;
    }

    const { name, email, password, cpassword } = user;
    try {
      const res = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          cpassword,
        }),
      });
      if (res.status === 400 || !res) {
        window.alert("Invalid Registration");
      } else {
        window.alert("Successfully Registration");
        history.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container mt-4 border shadow-lg p-5 mb-5 bg-white rounded rounded">
        <div className="signup-content row">
          <div className="signup-form col-md-4">
            <h1 className="form-title mt-5 font-weight-bold-display-4">
              Sign-up
            </h1>
            <form
              method="POST"
              className="register-form g-3 needs-validation"
              novalidate
              id="register-form"
            >
              <div className="form-group mb-2">
                <label htmlFor="name">
                  <i class="zmdi zmdi-account material-icons-name"></i> Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  className="form-control shadow-none"
                  required
                  value={user.name}
                  onChange={handleInputs}
                  placeholder="Your Name"
                />
                {error && !user.name && (
                  <span className="invalid-input">Enter your name</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <i class="zmdi zmdi-email material-icons-name"></i> Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  className="form-control shadow-none"
                  required
                  value={user.email}
                  onChange={handleInputs}
                  placeholder="Your Email"
                />
                {error && !user.email && (
                  <span className="invalid-input">Enter your Email</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="password">
                  <i class="zmdi zmdi-lock material-icons-name"></i> Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  className="form-control shadow-none"
                  required
                  value={user.password}
                  onChange={handleInputs}
                  placeholder="Your Password"
                />
                {error && !user.password && (
                  <span className="invalid-input">Enter your Password</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="cpassword">
                  <i class="zmdi zmdi-lock material-icons-name"></i> Confirm
                  Password
                </label>
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  autoComplete="off"
                  className="form-control shadow-none"
                  required
                  value={user.cpassword}
                  onChange={handleInputs}
                  placeholder="Confirm Password"
                />
                {error && !user.cpassword && (
                  <span className="invalid-input">Confirm Your Password</span>
                )}
              </div>

              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit btn btn-dark mt-3"
                  value="Register"
                  onClick={PostData}
                />

                <button
                  type="reset"
                  className="reset btn btn-danger mt-3 ml-3"
                  value="Reset"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-7 d-flex flex-column align-items-center text-dark justify-content-center form ">
            <p className="lead text-center"></p>
            <img
              className=" rounded mx-auto d-block  "
              src={signpic}
              alt="reg pic"
            />
            <h4 className="mb-4">OR</h4>
            <NavLink
              to="/login"
              className="btn btn-outline-dark rounded-1 pb-2 w-50 mx-auto bg-dark text-light "
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
