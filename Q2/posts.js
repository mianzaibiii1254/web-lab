const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  reactions: Number,
  userId: Number,
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
