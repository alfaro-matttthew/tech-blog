const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

// User.hasMany(Post, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE',
// });

// User.hasMany(Comment, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE',
// });

// Post.belongsTo(User, {
// });

// Comment.belongsTo(User, {
// });

// Comment.belongsTo(Post, {
// });

module.exports = { User, Comment, Post };
