const { Comment } = require("../models");

const commentData = [
  {
    body: "Super helpful, thanks!",
  },
  {
    body: "This article was just soooo informative",
  },
  {
    body: "...why did I not think of that sooner?",
  },
  {
    body: "Is your fridge running? Checkout my website to learn how to catch it: https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    body: "Super helpful, thanks!",
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
