const router = require("express").Router();
const PostController = require("../controllers/PostController");
const CommentController = require("../controllers/CommentController");

router.use("/post", PostController);
router.use("/comment", CommentController);

module.exports = router;
