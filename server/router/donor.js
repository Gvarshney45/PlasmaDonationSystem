const express = require("express");
const Donors = require("../model/donorSchema");
const donor = express.Router();
const authenticate = require("../middleware/authenticate");
const auth = require("../middleware/auth");

donor.get("/getdonors", async (req, res) => {
  try {
    const donor = await Donors.find(req.query);
    res.status(200).json(donor);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err.message });
  }
});
donor.get("/getdonor", auth, async (req, res) => {
  try {
    const donor = await Donors.findById(req.user._id);
    console.log(req);
    res.status(200).json(donor);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err.message });
  }
});
donor.post("/createdonor", auth, async (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const gender = req.body.gender;
  const age = req.body.age;
  const bloodgroup = req.body.bloodgroup;
  const positivedate = req.body.positivedate;
  const negativedate = req.body.negativedate;
  const phone = req.body.phone;
  const state = req.body.state;
  const city = req.body.city;

  if (
    !name ||
    !gender ||
    !age ||
    !bloodgroup ||
    !positivedate ||
    !negativedate ||
    !phone ||
    !state ||
    !city
  ) {
    return res
      .status(400)
      .json({ error: "Please fill all the fileds carefully" });
  }

  try {
    const newDonor = new Donors({
      name,
      gender,
      age,
      bloodgroup,
      positivedate,
      negativedate,
      phone,
      state,
      city,
    });
    await newDonor.save();
    res.status(200).json({ status: "form submited" });
  } catch (err) {
    console.log(err);
  }
});

donor.delete("/deletedonor/:id", auth, async (req, res) => {
  const donor = await Donors.findByIdAndRemove(req.params.id);

  if (!donor)
    return res.status(404).send("The donor with the given ID was not found.");
  auth, res.send(donor);
});

// donor.put("/updatedonor", async (req, res) => {
//   const newage = req.body.age;
//   const newbloodgroup = req.body.bloodgroup;
//   const newpositivedate = req.body.positivedate;
//   const newnegativedate = req.body.negativedate;
//   const newphone = req.body.phone;
//   const newstate = req.body.state;
//   const newcity = req.body.city;
//   console.log(req.body);
//   if (
//     !newage ||
//     !newbloodgroup ||
//     !newpositivedate ||
//     !newnegativedate ||
//     !newphone ||
//     !newstate ||
//     !newcity
//   ) {
//     return res
//       .status(422)
//       .json({ error: "Please fill all the fileds carefully" });
//   }
//   try {
//     const donorExists = await Donors.findByIdAndUpdate(req.params.id);

//     if (donorExists) {
//       donorExists.age = newage;
//       donorExists.bloodgroup = newbloodgroup;
//       donorExists.positivedate = newpositivedate;
//       donorExists.negativedate = newnegativedate;
//       donorExists.phone = newphone;
//       donorExists.state = newstate;
//       donorExists.city = newcity;
//       donorExists.save();
//       res.json({ status: "form submited" });
//     } else {
//       return res.status(400).json({ error: "Incorrecct ID" });
//     }
//     // res.status(200).json({ status: "form Updated Successfully" });
//   } catch (error) {
//     console.log(error);
//   }
// });

donor.put("/updatedonor/:id", auth, async (req, res) => {
  let result = await Donors.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
  console.log(result);
});
module.exports = donor;
