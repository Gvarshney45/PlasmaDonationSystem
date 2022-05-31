const express = require("express");
const Requester = require("../model/receiverSchema");
const requester = express.Router();

requester.get("/getrequesters", async (req, res) => {
  try {
    const requester = await Requester.find(req.query);
    res.status(200).json(requester);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err.message });
  }
});

requester.post("/createrequester", async (req, res) => {
  console.log(req.body);

  const name = req.body.name;
  const gender = req.body.gender;
  const age = req.body.age;
  const bloodgroup = req.body.bloodgroup;
  const positivedate = req.body.positivedate;
  const phone = req.body.phone;
  const state = req.body.state;
  const city = req.body.city;

  if (
    !name ||
    !gender ||
    !age ||
    !bloodgroup ||
    !positivedate ||
    !phone ||
    !state ||
    !city
  ) {
    return res
      .status(422)
      .json({ error: "Please fill all the fileds carefully" });
  }

  try {
    const newRequester = new Requester({
      name,
      gender,
      age,
      bloodgroup,
      positivedate,
      phone,
      state,
      city,
    });
    newRequester.save();
    res.json({ status: "form submited" });
  } catch (err) {
    console.log(err);
  }
});

requester.put("/updaterequester/:id", async (req, res) => {
  let result = await Requester.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
  console.log(result);
});

requester.delete("/deleterequester/:id", async (req, res) => {
  const requester = await Requester.findByIdAndRemove(req.params.id);

  if (!requester)
    return res
      .status(404)
      .send("The recevers with the given ID was not found.");

  res.send(requester);
});

module.exports = requester;
