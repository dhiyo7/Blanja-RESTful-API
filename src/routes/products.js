const express = require("express");
const productsRouter = express.Router();
const productsController = require("../controllers/products");

productsRouter.get("/", productsController.productAll);
productsRouter.get("/:id", productsController.getCategoryById);
productsRouter.post("/", productsController.postProduct);
productsRouter.put("/:id", productsController.editProduct);
productsRouter.delete("/:id", productsController.deleteProduct);

module.exports = productsRouter;
