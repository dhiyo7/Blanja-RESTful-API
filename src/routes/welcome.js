const express = require("express");
const welcomeRouter = express.Router();

welcomeRouter.get("/", (_, res) => {
  const resObject = {
    message: "Welcome to Blanja API",
    status: 200,
    createdBy: "Dhiya Reksa Kusumojati B",
    fullDocumentation: "https://github.com/dhiyo7/Blanja-RESTful-API"
  }
  res.status(200).json(resObject);
});

module.exports = welcomeRouter;
