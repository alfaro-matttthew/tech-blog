const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");
const dayjs = require("dayjs");

// Prevent non logged in users from viewing the homepage
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      // attributes: { exclude: ["password"] },
      order: [["id", "DESC"]],
      include: User
    });

    const posts = postData.map((blogposts) => blogposts.get({ plain: true }));
    console.log(posts);
    for (const post of posts) {
      post.formattedDate = new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
    // console.log(posts);
    res.render("homepage", {
      posts,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      // attributes: { exclude: ["password"] },
      order: [["id", "DESC"]],
    });

    const posts = postData.map((blogposts) => blogposts.get({ plain: true }));

    res.render("dashboard", {
      posts,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: User,
        },
      ],
    });
    const post = postData.get({ plain: true });

    post.formattedDate = dayjs(post.date).format("MMMM D, YYYY"); 

    for (const comment of post.comments) {
      comment.formattedDate = dayjs(comment.date).format("MMMM D, YYYY");
    }
    // console.log(post);
    // console.log(post);
    res.render("singlePost", {
      post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
