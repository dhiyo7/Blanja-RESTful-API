const express = require("express");
const productsRouter = express.Router();
const productsController = require("../controllers/products");
const checkToken = require("../helpers/middlewares/checkToken");
const uploadImage = require("../helpers/middlewares/multiUpload");

productsRouter.get("/", productsController.productAll);
productsRouter.get("/:id", checkToken, productsController.getProductById);
productsRouter.post("/", checkToken, uploadImage, productsController.postProduct);
productsRouter.put("/:id", checkToken, productsController.editProduct);
productsRouter.delete("/:id", checkToken, productsController.deleteProduct);

module.exports = productsRouter;
