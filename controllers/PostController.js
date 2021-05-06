const Post = require("../models/Post.js");
const { route } = require("../routes/router.js");

const router = require("express").Router();

router.get("/", (req, res) => {
  Post.find({}, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500).end();
    } else {
      res.send(result);
    }
  });
});

router.post("/create", (req, res) => {
  const post = new Post({
    ...req.body,
  });
  post.save((err) => {
    if (err) {
      console.log(err);
      res.sendStatus(500).end();
    } else {
      res.end();
    }
  });
});

router.put("/update/:id", (req, res) => {
  Post.updateOne(
    { _id: req.params.id },
    {
      ...req.body,
      updated_at: new Date(),
    },
    {},
    (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(500).end();
      } else {
        res.end();
      }
    }
  );
});

router.delete("/delete/:id", (req, res) => {
  Post.deleteOne(
    {
      _id: req.params.id,
    },
    {},
    (err) => {
      if (err) {
        res.sendStatus(500).end();
      } else {
        res.end();
      }
    }
  );
});

router.put("/like/:id", (req, res) => {
  Post.updateOne(
    { _id: req.params.id },
    {
      $inc: { like_count: 1 },
      updated_at: new Date(),
    },
    {},
    (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(500).end();
      } else {
        res.end();
      }
    }
  );
});

module.exports = router;
