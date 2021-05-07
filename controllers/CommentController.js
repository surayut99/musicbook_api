const Comment = require("../models/Comment");

exports.fetch = (req, res) => {
  Comment.find({}, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500).end();
    } else {
      res.send(result);
    }
  });
};

exports.create = (req, res) => {
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
};

exports.update = (req, res) => {
  Comment.updateOne(
    { _id: req.params.id },
    { ...req.body, updated_at: new Date() },
    {},
    (err) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.end();
      }
    }
  );
};

exports.delete = (req, res) => {
  Comment.deleteOne({ _id: req.params.id }, {}, (err) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.end();
    }
  });
};
