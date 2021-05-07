const Post = require("../models/Post.js");

exports.fetch = (req, res) => {
  Post.find({}, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500).end();
    } else {
      res.send(result);
    }
  });
};

exports.create = (req, res) => {
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
};

exports.update = (req, res) => {
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
        res.end();
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
};
