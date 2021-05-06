const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  song: String,
  artist: String,
  link: String,
  caption: String,
  like_count: { type: Number, default: 0 },
  created_at: { type: Date, default: new Date() },
  updated_at: { type: Date, default: new Date() },
});
const Post = mongoose.model("post", postSchema);

module.exports = Post;
