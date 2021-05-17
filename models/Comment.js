const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  post_id: String,
  content: String,
  created_at: { type: Date, default: new Date() },
  updated_at: { type: Date, default: new Date() },
});
const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;
