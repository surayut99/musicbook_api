const router = require("express").Router();
const Comment = require("../models/Comment");

router.get("/", (req, res) => {
  Comment.find({}, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500).end();
    } else {
      res.send(result);
    }
  });
});

router.post("/create", (req, res) => {
  const comment = new Comment({
    ...req.body,
  });
  comment.save((err) => {
    if (err) {
      console.log(err);
      res.sendStatus(500).end();
    } else {
      res.end();
    }
  });
});

module.exports = router;
