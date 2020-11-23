const express = require("express");
const mainRouter = express.Router();

const welcomeRouter = require("./welcome");
const categoriesRouter = require("./categories");
const sizesRouter = require("./sizes");
const colorsRouter = require("./colors");
const productsRouter = require("./products");
const searchRouter = require("./search");
// const historiesRouter = require("./histories");

mainRouter.use("/", welcomeRouter);
mainRouter.use("/categories", categoriesRouter);
mainRouter.use("/sizes", sizesRouter);
mainRouter.use("/colors", colorsRouter);
mainRouter.use("/products", productsRouter);
mainRouter.use("/search", searchRouter);
// mainRouter.use("/histories", historiesRouter);

module.exports = mainRouter;
