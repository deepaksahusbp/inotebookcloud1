const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const { findOne } = require("../models/User");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = "$Deepakisacoder$";

// ROUTE 1 : Create an User using : POST "/api/auth/". No login required
router.post(
  "/createuser",
  [
    body("email", "Enter a valid Email").isEmail(),
    body("name", "Name Should be atleast 3 chars").isLength({ min: 3 }),
    body("password", "Password Should be atleast 5 chars").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success=false;
    //If there are errors, return Bad Request and the Errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    //Check whether the user with this email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({success, error: "Sorry User with this email ID already exists" });
      }
      const salt = await bcrypt.genSaltSync(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      //Create a new User
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      const authtoken = jwt.sign(data, JWT_SECRET);

      //res.json(user);
      success=true;
      res.json({success, authtoken });

      //Catch Errors
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 2 : Authenticate an User using : POST "/api/auth/login". No login required
router.post(
  "/login",
  [
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    //If there are errors, return Bad Request and the Errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        success = false;
        return res.status(400).json({ error: "Sorry user does not exits" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res.status(400).json({ success, error: "Wrong Password" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };



      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 3 : Get loggedin User details using : POST "/api/auth/getuser". Login required
router.post(
  '/getuser', fetchuser,
  async (req, res) => {
    
    try {
      userId = req.user.id;
      const user = await User.findById(userId).select("-password")
      res.send(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router
