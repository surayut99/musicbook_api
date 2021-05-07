const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { URI, PORT } = require("./config");
const router = require("./routes/RouterCombiner");
const app = express();

// connect to database
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

// config app
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(router);
app.listen(PORT, () => {
  console.log("\nServer is running on port:", PORT);
});

// router for index
app.get("/", (req, res) => {
  res.send("Welcome to our musicbook API");
});

app.use((req, res) => {
  res.send("Cannot solve your path");
});
