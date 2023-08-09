const sequelize = require("../config/connection");

const seedPost = require("./seedPost");
const seedUser = require("./seedUser");
const seedComment = require("./seedComment");

// const { User, Comment, Post } = require("../models");

// const userData = require("./userData");
// const commentData = require("./commentData");
// const postData = require("./postData");

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   await Comment.bulkCreate(commentData, {
//     individualHooks: true,
//     returning: true,
//   });

//   await Post.bulkCreate(postData, {
//     individualHooks: true,
//     returning: true,
//   });

//   process.exit(0);
// };

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedPost();

  await seedUser();

  await seedComment();

  process.exit(0);
};

seedDatabase();
