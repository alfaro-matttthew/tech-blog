const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
const { Post } = require("../../models");

router.post("/create", async (req, res) => {
    try {
        console.log("Adding post")
        console.log(req.body);

        const postData = await Post.create({
          title: req.body.title,
          body: req.body.body,
          date: Date.now(),
          user_id: req.body.user_id
        });

        console.log(postData)

        res.status(200).json(postData);
        
      } catch (err) {
        console.log("Error while posting: ", err);
        res.status(500).json("Server side Error: ", err);
      }
    });


module.exports = router;