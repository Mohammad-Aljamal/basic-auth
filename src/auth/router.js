"user strict";

require("dotenv").config();
const express = require("express");
const basicAuth = express.Router();
const bcrypt = require("bcrypt");
const basic = require("./middleware/basic");
const { Users } = require("./models/index");

// Signup Route -- create a new user
// Two ways to test this route with httpie
// echo '{"username":"john","password":"foo"}' | http post :3000/signup
// http post :3000/signup username=john password=foo
basicAuth.post("/signup", async (req, res) => {
  try {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      const record = await Users.create(req.body);
      res.status(201).json(record);
    
  } 
  catch (e) {
    res.status(403).send("Error Creating User");
  }
}
);

// Signin Route -- login with username and password
// test with httpie
// http post :3000/signin -a john:foo
basicAuth.post("/signin", basic, handleSignin);

function handleSignin(req, res) {
  res.status(201).send(req.user);
}

module.exports = basicAuth;
