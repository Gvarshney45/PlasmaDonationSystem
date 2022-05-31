const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const express = require("express");
const authenticate = require("../middleware/authenticate");
const router = express.Router();
require("mongoose");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("Hello World from router ");
});

// USING ASYNC
router.post("/signup", async (req, res) => {
  const { name, email, password, cpassword } = req.body;
  if (!name || !email || !password || !cpassword) {
    return res.status(400).json({ error: "Plz filled required field" });
  }
  try {
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(400).json({ error: "Email already Exist" });
    } else if (password != cpassword) {
      return res.status(400).json({ error: "password are not matching" });
    } else {
      const user = new User({ name, email, password, cpassword });
      await user.save();
      res.status(200).json({ message: "User registered sucesffully" });
    }
  } catch (error) {
    console.log(error);
  }
});

// login Route
router.post("/login", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Fill the data" });
    }
    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 2582000000),
        httpOnly: true,
      });
      if (!isMatch) {
        res.status(400).json({ error: "Invalid credentials" });
      } else {
        res.json({ message: "User SignIn successfully" });
      }
    } else {
      res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/about", authenticate, (req, res) => {
  console.log("Hello my About");
  res.send(req.rootUser);
});
// router.get('/dashboard',authenticate, (req,res)=>{
//     console.log("Hello my Dash");
//     res.send(req.rootUser);

// });
router.get("/logout", (req, res) => {
  console.log("Hello my logout");

  res.clearCookie("jwtoken", { path: "/" });

  res.status(200).send("User Logout");
});

module.exports = router;
