const express = require("express");
const welcomeRouter = express.Router();

welcomeRouter.get("/", (_, res) => {
  res.send("Hello World");
});

module.exports = welcomeRouter;
