const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { URI, PORT } = require("./config");
const router = require("./routes/router");

const app = express();

mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("[success] database connected");
    }
  }
);

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(router);

app.get("/", (req, res) => {
  res.send("Welcome to our musicbook API");
});

app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
