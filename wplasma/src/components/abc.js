import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

import { Form, Button, Col, InputGroup, Row } from "react-bootstrap";
const Abc = () => {
  const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
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

  const PostData = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
    if (!handleValidation()) {
      alert(user.error);
    } else {
      const {
        name,
        // gender,
        age,
        // bloodgroup,
        // positivedate,
        // negativedate,
        phone,
        state,
        city,
      } = user;

      const res = await fetch("/api/createdonor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          // gender,
          age,
          // bloodgroup,
          // positivedate,
          // negativedate,
          phone,
          state,
          city,
        }),
      });

      const data = await res.json();
      console.log(res.status);
      if (res.status === 400 || !res) {
        window.alert("Fill all the fields  in the form ");
      } else {
        window.alert("Form Submit successfull");
        history.push("/donorlist");
      }
    }
  };

  return (
    <div className="container shadow mt-5 ">
      <div className="align-items-center ">
        <Form
          noValidate
          validated={validated}
          onSubmit={PostData}
          method="POST"
        >
          <Row className="mb-3 px-5 ">
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                aria-describedby="Name"
                // value={user.name}
                onChange={handleInputs}
                placeholder="Name"
              />
              <Form.Control.Feedback type="invalid">
                Please Enter your Name
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3 px-5 ">
            <Form.Group as={Col} md="3" controlId="validationCustomUsername">
              <Form.Label>Age</Form.Label>
              <InputGroup hasValidation>
                {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                <Form.Control
                  type="number"
                  placeholder="Age"
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={handleInputs}
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter your age.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3 px-5">
            <Form.Group as={Col} md="3" controlId="validationCustom03">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3 px-5">
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                required
                onChange={handleInputs}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3 px-5">
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="number" placeholder="Mob number" required />
              <Form.Control.Feedback type="invalid">
                Please provide number.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3 px-5">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Row className="mb-3 px-5">
            <Button type="submit">Submit form</Button>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Abc;
