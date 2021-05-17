const router = require("express").Router();
const PostRouter = require("./PostRouter");
const CommentRouter = require("./CommentRouter");

router.use("/post", PostRouter);
router.use("/comment", CommentRouter);

module.exports = router;
