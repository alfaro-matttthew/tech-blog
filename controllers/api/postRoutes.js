const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
const { Post } = require("../../models");

router.post("/create", async (req, res) => {
    try {
        const postData = await Post.create({
          title: req.body.title,
          body: req.body.body,
          date: Date.now,
          user_id: req.session.user_id
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

// router.delete

// router.put

module.exports = router;