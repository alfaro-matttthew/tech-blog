const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");
const dayjs = require("dayjs");

// Home Page
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      // attributes: { exclude: ["password"] },
      order: [["id", "DESC"]],
      include: User,
    });

    const posts = postData.map((blogposts) => blogposts.get({ plain: true }));
    // console.log(posts);
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
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// Sign Up
router.get("/signup", (req, res) => {
  res.render("signup");
});

// Dashboard
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    console.log('THis is also working');
    const user_id = req.session.user_id;

    const fetchUserData = async (user_id) => {
      const user = await User.findByPk(user_id, {
        include: [
        {
          model: Post,
          include: Post
        },
        {
          model: Comment,
          include: User,
        },
      ],
    });
      return user;
    }

    const userData = await fetchUserData(user_id);

    const plainUser = userData.toJSON();

    console.log(plainUser);
    res.render("dashboard", {
      user: plainUser,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Single Post
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
