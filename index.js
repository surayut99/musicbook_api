const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "nodeuser",
    password: "nodepass",
    database: "musicbook",
  },
  (err) => {
    console.log(err);
  }
);

app.get("/posts", (req, res) => {
  db.query("SELECT * FROM posts", (err, result) => {
    if (err) {
      res.send(err.sqlMessage);
    } else {
      res.send(result);
    }
  });
});

app.get("/comments", (req, res) => {
  db.query("SELECT * FROM comments", (err, result) => {
    if (err) {
      res.send(err.sqlMessage);
    } else {
      res.send(result);
    }
  });
});

app.put("/post/like/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    `UPDATE posts SET like_count = like_count + 1 WHERE posts.id = ${id}`,
    (err) => {
      if (err) {
        res.send(err.sqlMessage);
      } else {
        res.send();
      }
    }
  );
});

app.post("/post/create", (req, res) => {
  db.query(
    "INSERT INTO posts (song, artist, link, caption) VALUES(?, ?, ?, ?)",
    [req.body.song, req.body.artist, req.body.link, req.body.caption],
    (err, result) => {
      if (err) {
        res.send(err.sqlMessage);
      } else {
        res.send(result);
      }
    }
  );
});

app.put("/post/update/:id", (req, res) => {
  db.query(
    "UPDATE posts SET song = ?, artist = ?, link = ?, caption = ? WHERE id = ?",
    [
      req.body.song,
      req.body.artist,
      req.body.link,
      req.body.caption,
      req.params.id,
    ],
    (err, result) => {
      if (err) {
        res.send(err.sqlMessage);
      } else {
        res.send();
      }
    }
  );
});

app.delete("/post/delete/:id", (req, res) => {
  db.query(`DELETE FROM posts WHERE id = ${req.params.id}`, (err, result) => {
    if (err) {
      res.send(err.sqlMessage);
    } else {
      res.send();
    }
  });
});

app.post("/comment/create", (req, res) => {
  db.query(
    "INSERT INTO comments (post_id, content) VALUES(?, ?)",
    [req.body.post_id, req.body.content],
    (err, result) => {
      if (err) {
        res.send(err.sqlMessage);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3001, () => {
  console.log("SERVER IS RUNNING ON POST: 3001");
});
