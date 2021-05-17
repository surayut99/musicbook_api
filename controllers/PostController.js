const Post = require("../models/Post.js");
const Comment = require("../models/Comment.js");

exports.fetch = (req, res) => {
  Post.find({}, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500).end();
    } else {
      res.send(result.reverse());
    }
  });
};

exports.create = (req, res) => {
  const post = new Post({
    ...req.body,
  });
  post.save((err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500).end();
    } else {
      res.send(result);
    }
  });
};

exports.update = (req, res) => {
  Post.updateOne(
    { _id: req.params.id },
    {
      ...req.body,
      updated_at: new Date(),
    },
    null,
    (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(500).end();
      } else {
        res.end();
      }
    }
  );
};

exports.delete = (req, res) => {
  Post.deleteOne(
    {
      _id: req.params.id,
    },
    {},
    (err) => {
      if (err) {
        res.sendStatus(500).end();
      } else {
        Comment.deleteMany({ post_id: req.params.id }, null, (err) => {
          if (err) {
            console.log(err);
            res.sendStatus(500).end();
          } else {
            res.end();
          }
        });
      }
    }
  );
};

exports.like = (req, res) => {
  Post.updateOne(
    { _id: req.params.id },
    {
      $inc: { like_count: 1 },
      updated_at: new Date(),
    },
    null,
    (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(500).end();
      } else {
        res.end();
      }
    }
  );
};
