import React, { useState, useContext } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { UserContext } from "../../App";

const Login = () => {
  const { state, dispatch } = useContext(UserContext);

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const loginUser = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError(true);
      return false;
    }
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    // const data=res.json();
    if (res.status === 400 || !res) {
      window.alert("Invalid Credentials");
    } else {
      dispatch({ type: "USER", payload: true });
      window.alert("Login successful");
      history.push("/");
    }
  };
  return (
    <div>
      <div className="container shadow my-5">
        <div className="row">
          <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form bg-secondary">
            <h1 className="display-4 fw-bolder">Welcome Back</h1>
            <p className="lead text-center">Enter Your Credentials to Login</p>
            <h5 className="mb-4">OR</h5>
            <NavLink
              to="/signup"
              className="btn btn-outline-light rounded-pill pb-2 w-50"
            >
              Register
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5">Login</h1>
            <form method="POST">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && !email && (
                  <span className="invalid-input">Enter your Email</span>
                )}
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && !password && (
                  <span className="invalid-input">Enter your Password</span>
                )}
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                  name="check"
                />

                <label class="form-check-label" for="exampleCheck1">
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                class="btn btn-primary w-100 mt-4 round-pill"
                value="Log In"
                onClick={loginUser}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
