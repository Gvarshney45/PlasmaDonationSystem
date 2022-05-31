import React, { useState } from "react";
import "./donorform.css";
import { NavLink, useHistory, useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const DonorUpdateForm = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    gender: "",
    age: "",
    bloodgroup: "",
    positivedate: "",
    negativedate: "",
    phone: "",
    state: "",
    city: "",
    error: "",
  });
  // const navigate = useNavigate();
  // const [gender, setGender] = useState("");
  // const [age, setAge] = useState("");
  // const [bloodgroup, setBloodgroup] = useState("");
  // const [state, setState] = useState("");
  // const [city, setCity] = useState("");
  // const [phone, setPhone] = useState("");
  // const [positivedate, setPositiveDate] = useState("");
  // const [negativedate, setNegativeDate] = useState("");
  const params = useParams();
  // useEffect(() => {
  //   getDonorDetails();
  // }, []);

  // const getDonorDetails = async () => {
  //   console.warn(params);
  //   let result = await fetch(`/api/getdonors/${params.id}`);
  //   result = await result.json();
  //   console.warn(result);
  //   // setUser(
  //   //   result.gender,
  //   //   result.age,
  //   //   result.bloodgroup,
  //   //   result.positivedate,
  //   //   result.negativedate,
  //   //   result.phone,
  //   //   result.state,
  //   //   result.city
  //   // );

  //   setGender(result.gender);
  //   setAge(result.age);
  //   setBloodgroup(result.bloodgroup);
  //   setPositiveDate(result.positivedate);
  //   setNegativeDate(result.negativedate);
  //   setPhone(result.phone);
  //   setState(result.state);
  //   setCity(result.city);
  // };
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  function handleValidation() {
    var formIsValid = true;
    var age = parseInt(user.age);
    var pdate = new Date(user.positivedate);
    var ndate = new Date(user.negativedate);
    var today = new Date();
    console.log(pdate + " " + ndate + " " + today);
    if (age <= 18 || age >= 60) {
      formIsValid = false;
      user.error =
        "Age should be between 18 to 60. Please check the eligibility to donate plasma.";
    } else if (pdate.getFullYear() <= today.getFullYear()) {
      if (pdate.getMonth() <= today.getMonth()) {
        if (pdate.getDate() <= today.getDate()) {
          formIsValid = true;
        } else {
          formIsValid = false;
          user.error = "Please enter valid COVID-19 positive date";
        }
      }
    } else if (
      ndate.getFullYear() <= today.getFullYear() &&
      ndate.getFullYear() >= pdate.getFullYear()
    ) {
      if (
        ndate.getMonth() <= today.getMonth() &&
        ndate.getMonth() >= pdate.getMonth()
      ) {
        formIsValid = true;
      } else {
        formIsValid = false;
        user.error = "Please enter valid COVID-19 negative date";
      }
    } else {
      window.alert("Please Fill the form Carefully");
    }

    return formIsValid;
  }

  // const UpdateData = async () => {
  //   if (!handleValidation) {
  //     alert(user.error);
  //   } else {
  //     console.warn(
  //       gender,
  //       age,
  //       bloodgroup,
  //       positivedate,
  //       negativedate,
  //       phone,
  //       state,
  //       city
  //     );
  //     let result = await fetch(`/api/updatedonor/${params.id}`, {
  //       method: "PUT",
  //       body: JSON.stringify({
  //         gender,
  //         age,
  //         bloodgroup,
  //         positivedate,
  //         negativedate,
  //         phone,
  //         state,
  //         city,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     result = await result.json();
  //     console.warn(result);
  //     if (result) {
  //       alert("update successfully");
  //       history.push("/donorlist");
  //     }
  //   }
  // };
  const UpdateData = async () => {
    // id.preventDefault();
    if (!handleValidation()) {
      alert(user.error);
    } else {
      const {
        gender,
        age,
        bloodgroup,
        positivedate,
        negativedate,
        phone,
        state,
        city,
      } = user;

      const res = await fetch(`/api/updatedonor/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gender,
          age,
          bloodgroup,
          positivedate,
          negativedate,
          phone,
          state,
          city,
        }),
      });

      const data = await res.json();
      console.log(data.id);
      console.log(res.status);
      if (res.status === 400 || !res) {
        window.alert("invalid");
      } else if (res.status === 200) {
        window.alert("Form Update successfull");
        history.push("/donorlist");
      }
    }
  };

  return (
    <div className="signup-form container mt-4 border shadow-lg p-5 mb-5 bg-white rounded rounded">
      <h2 className="heading bg-dark">Update Donor Information</h2>
      <NavLink to="/about" className="text-center ">
        <p class="subtitle">
          {" "}
          Please check the guidelines/eligibility to donate plasma before
          submitting the form.
        </p>
      </NavLink>
      <hr />
      <form method="PUT" className="register-form" id="register-form">
        {/* <div class="form-group"> */}
        {/* <span className="labels">Gender *</span>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <span class="fa fa-user"></span>
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              name="gender"
              value={user.gender}
              onChange={handleInputs}
              // onChange={(e) => setGender(e.target.value)}
              placeholder="Enter your full name"
              required="required"
            />
          </div>
        </div> */}
        <div class="form-group">
          <span className="labels">Gender *</span>
          <div class="input-group">
            <input
              type="radio"
              id="male"
              name="gender"
              value="Male"
              checked={user.gender === "Male"}
              onChange={handleInputs}
              // onClick={(e) => setGender(e.target.value)}
            />
            &nbsp;
            <span className="radiolabels" for="male">
              Male
            </span>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              checked={user.gender === "Female"}
              onChange={handleInputs}
              // onClick={(e) => setGender(e.target.value)}
            />
            &nbsp;
            <span className="radiolabels" for="female">
              Female
            </span>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="radio"
              id="other"
              name="gender"
              value="Other"
              checked={user.gender === "Other"}
              onChange={handleInputs}
              // onClick={(e) => setGender(e.target.value)}
            />
            &nbsp;
            <span className="radiolabels" for="other">
              Other
            </span>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
        <div class="form-group">
          <span className="labels">Age * (Should be between 18 to 60)</span>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-paper-plane"></i>
              </span>
            </div>
            <input
              type="number"
              class="form-control"
              name="age"
              value={user.age}
              // onChange={(e) => {
              //   setAge(e.target.value);
              // }}
              onChange={handleInputs}
              placeholder="Enter your age"
              required="required"
            />
          </div>
        </div>
        <div class="form-group">
          <span className="labels">Blood Group *</span>
          <div className="input-group">
            <input
              type="radio"
              id="O+"
              name="bloodgroup"
              value="O+"
              checked={user.bloodgroup === "O+"}
              onChange={handleInputs}
              // onClick={(e) => setBloodgroup(e.target.value)}
            />
            &nbsp;
            <span className="radiolabels" for="O+">
              O+
            </span>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="radio"
              id="O-"
              name="bloodgroup"
              value="O-"
              checked={user.bloodgroup === "O-"}
              onChange={handleInputs}
              // onClick={(e) => setBloodgroup(e.target.value)}
            />
            &nbsp;
            <span className="radiolabels" for="O-">
              O-
            </span>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="radio"
              id="A+"
              name="bloodgroup"
              value="A+"
              checked={user.bloodgroup === "A+"}
              onChange={handleInputs}
              // onClick={(e) => setBloodgroup(e.target.value)}
            />
            &nbsp;
            <span className="radiolabels" for="A+">
              A+
            </span>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="radio"
              id="A-"
              name="bloodgroup"
              value="A-"
              checked={user.bloodgroup === "A-"}
              onChange={handleInputs}
              // onClick={(e) => setBloodgroup(e.target.value)}
            />
            &nbsp;
            <span className="radiolabels" for="A-">
              A-
            </span>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="radio"
              id="B+"
              name="bloodgroup"
              value="B+"
              checked={user.bloodgroup === "B+"}
              onChange={handleInputs}
              // onClick={(e) => setBloodgroup(e.target.value)}
            />
            &nbsp;
            <span className="radiolabels" for="B+">
              B+
            </span>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="radio"
              id="B-"
              name="bloodgroup"
              value="B-"
              checked={user.bloodgroup === "B-"}
              onChange={handleInputs}
              // onClick={(e) => setBloodgroup({ bloodgroup: e.target.value })}
            />
            &nbsp;
            <span className="radiolabels" for="B-">
              B-
            </span>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="radio"
              id="AB+"
              name="bloodgroup"
              value="AB+"
              checked={user.bloodgroup === "AB+"}
              onChange={handleInputs}
              // onClick={(e) => setBloodgroup({ bloodgroup: e.target.value })}
            />
            &nbsp;
            <span className="radiolabels" for="AB+">
              AB+
            </span>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="radio"
              id="AB-"
              name="bloodgroup"
              value="AB-"
              checked={user.bloodgroup === "AB-"}
              onChange={handleInputs}
              // onClick={(e) => setBloodgroup(e.target.value)}
            />
            &nbsp;
            <span className="radiolabels" for="AB-">
              AB-
            </span>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="radio"
              id="no"
              name="bloodgroup"
              value="Don't Know"
              checked={user.bloodgroup === "Don't Know"}
              onChange={handleInputs}
              // onClick={(e) => setBloodgroup(e.target.value)}
            />
            &nbsp;
            <span className="radiolabels" for="no">
              Don't Know
            </span>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
        <div class="form-group">
          <span className="labels">Date Of COVID-19 positive *</span>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-paper-plane"></i>
              </span>
            </div>
            <input
              type="date"
              class="form-control"
              name="positivedate"
              value={user.positivedate}
              onChange={handleInputs}
              // onChange={(e) => setPositiveDate(e.target.value)}
              placeholder="Enter date"
              required="required"
            />
          </div>
        </div>
        <div class="form-group">
          <span className="labels">Date Of COVID-19 negative *</span>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-paper-plane"></i>
              </span>
            </div>
            <input
              type="date"
              class="form-control"
              name="negativedate"
              value={user.negativedate}
              onChange={handleInputs}
              // onChange={(e) => setNegativeDate(e.target.value)}
              placeholder="Enter date"
              required="required"
            />
          </div>
        </div>

        <div class="form-group">
          <span className="labels">Phone Number *</span>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-phone"></i>
              </span>
            </div>
            <input
              type="number"
              class="form-control"
              name="phone"
              value={user.phone}
              onChange={handleInputs}
              // onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your 10 digit phone number"
              required="required"
            />
          </div>
        </div>
        <div class="form-group">
          <span className="labels">State *</span>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-briefcase"></i>
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              name="state"
              value={user.state}
              onChange={handleInputs}
              // onChange={(e) => setState(e.target.value)}
              placeholder="Enter your state"
              required="required"
            />
          </div>
        </div>
        <div class="form-group">
          <span className="labels">City *</span>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-briefcase"></i>
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              name="city"
              value={user.city}
              onChange={handleInputs}
              // onChange={(e) => {
              //   setCity(e.target.value);
              // }}
              placeholder="Enter your city"
              required="required"
            />
          </div>
        </div>
        <div class="form-group">
          <button
            type="submit"
            onClick={UpdateData}
            class="btn btn-primary btn-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DonorUpdateForm;
