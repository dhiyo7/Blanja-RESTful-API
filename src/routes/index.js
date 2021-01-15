const express = require("express");
const mainRouter = express.Router();

const welcomeRouter = require("./welcome");
const categoriesRouter = require("./categories");
const sizesRouter = require("./sizes");
const colorsRouter = require("./colors");
const productsRouter = require("./products");
const searchRouter = require("./search");
const sortingRouter = require("./sorting");
const ratingRoute = require("./ratings");
const historyTransactionsRouter = require("./historyTransactions");
const authRouter = require("./auth");
const addressRouter = require("./address");

mainRouter.use("/", welcomeRouter);
mainRouter.use("/categories", categoriesRouter);
mainRouter.use("/sizes", sizesRouter);
mainRouter.use("/colors", colorsRouter);
mainRouter.use("/products", productsRouter);
mainRouter.use("/search", searchRouter);
mainRouter.use("/sorting", sortingRouter);
mainRouter.use("/ratings", ratingRoute);
mainRouter.use("/history", historyTransactionsRouter);
mainRouter.use("/auth", authRouter);
mainRouter.use("/address", addressRouter);

module.exports = mainRouter;
