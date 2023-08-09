const { Post } = require('../models');

const postData = [
    {
    "title": "Sequelize 101",
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
    "title": "JavaScript v. Java",
    "body": "Tristique senectus et netus et malesuada fames ac turpis egestas. Vulputate enim nulla aliquet porttitor. Sed arcu non odio euismod lacinia at quis risus sed. Id donec ultrices tincidunt arcu non. Eu nisl nunc mi ipsum faucibus vitae aliquet nec. Nibh sed pulvinar proin gravida. Massa tempor nec feugiat nisl pretium fusce id. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Odio facilisis mauris sit amet massa vitae tortor."
    },
    {
    "title": "Do you really know Objects?",
    "body": "Vitae elementum curabitur vitae nunc sed. At varius vel pharetra vel turpis nunc eget lorem. Pharetra vel turpis nunc eget. Curabitur vitae nunc sed velit dignissim sodales. Cursus eget nunc scelerisque viverra mauris. Et ultrices neque ornare aenean euismod elementum. Aliquet nec ullamcorper sit amet risus nullam eget felis eget."
    },
    {
    "title": "Top 5 Node.js Modules",
    "body": "Nullam vitae mi sit amet lacus scelerisque consectetur a nec quam. Integer lobortis, ligula sit amet pulvinar malesuada, magna massa aliquet turpis, id auctor sem dui eu mauris. Vestibulum malesuada nisi sed urna semper, ac facilisis metus pretium. Sed non molestie nisi, eu scelerisque diam. Mauris nec iaculis sapien, eu vulputate mi. Duis ac lacus sit amet ligula eleifend porttitor et congue ligula. Maecenas eros lacus, porttitor eget erat in, blandit commodo eros. Morbi massa urna, elementum eget sollicitudin in, molestie nec felis. Integer et elit tortor."
    },
    {
    "title": "HTML and Handlebars",
    "body": "Maecenas quis dolor id libero rutrum mollis at ut arcu. Aenean eu tristique turpis. Curabitur tempor malesuada felis eget pretium. Suspendisse potenti. Aenean dictum rutrum tempus. Cras a vulputate magna. Mauris interdum arcu a lobortis blandit. Aliquam at enim in orci scelerisque dictum. Donec vel orci hendrerit, iaculis nibh non, ultrices odio. Proin tincidunt enim ante, nec tempus sem mollis vitae. Donec dignissim eros quis eros pellentesque, at varius lectus volutpat. Nullam sed leo posuere, volutpat eros at, mollis elit. Suspendisse nec nisi eget purus convallis dictum et id sem. Sed nibh neque, varius a odio eu, porta tincidunt enim. Nulla vestibulum quis lectus porttitor auctor.    "
    }
  ];

  const seedPost = () => Post.bulkCreate(postData);

  module.exports = seedPost;