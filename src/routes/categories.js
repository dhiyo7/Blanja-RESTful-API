const express = require("express");
const categoriesRouter = express.Router();
const categoriesController = require("../controllers/categories");

categoriesRouter.get("/", categoriesController.categoryAll);
categoriesRouter.post("/", categoriesController.postCategory)
module.exports = categoriesRouter;
