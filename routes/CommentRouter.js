const CommentRouter = require("express").Router();
const CommentController = require("../controllers/CommentController");

CommentRouter.get("/", CommentController.fetch);
CommentRouter.post("/create", CommentController.create);
CommentRouter.put("/update/:id", CommentController.update);
CommentRouter.delete("/delete/:id", CommentController.delete);

module.exports = CommentRouter;
