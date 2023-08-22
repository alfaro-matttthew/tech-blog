const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
const { User } = require("../../models");

// router.get("/sign_up", (req, res) => {
//   try {
//     res.sendFile(path.join(__dirname, "/views/signup.handlebars"));
//     res.status(200);
//   } catch (err) {
//     console.log("Error while redirecting: ", err);
//     res.status(500).json("Server side Error: ", err);
//   }
// });

router.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.log("Error while signing up: ", err);
    res.status(500).json("Server side Error: ", err);
  }
})


// Create a new user //
router.post("/signup", async (req, res) => {
  try {
    const userData = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    // req.session.save(() => {
    //   req.session.loggedIn = true;

      res.status(200).json(userData);
    // });
  } catch (err) {
    console.log("Error while signing up: ", err);
    res.status(500).json("Server side Error: ", err);
  }
});

router.post("/login", async (req, res) => {
  try {
    // Find the user who matches the posted e-mail address
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    // Verify the posted password with the password store in the database
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    // Create session variables based on the logged in user
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post("/post/:id"), 



module.exports = router;
