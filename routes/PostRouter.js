const PostRouter = require("express").Router();
const PostController = require("../controllers/PostController");

PostRouter.get("/", PostController.fetch);
PostRouter.post("/create", PostController.create);
PostRouter.put("/update/:id", PostController.update);
PostRouter.delete("/delete/:id", PostController.delete);
PostRouter.put("/like/:id", PostController.like);

module.exports = PostRouter;
