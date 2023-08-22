const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
const { Comment } = require("../../models");

router.post("/:id", async (req, res) => {
    console.log("route hit");
    console.log(req.params.id)
    try {
        const commentData = await Comment.create({
            body: req.body.comment,
            date: Date.now,
            user_id: req.session.user_id,
            post_id: req.params.id
        });
        res.status(200).json(commentData);
    }
    
    catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.post("/post/:id"), 

module.exports = router;