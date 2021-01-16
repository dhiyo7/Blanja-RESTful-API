const express = require("express");
const orders = express.Router();
const ordersController = require("../controllers/orders");
const checkToken = require("../helpers/middlewares/checkToken");


orders.get('/', checkToken, ordersController.getHistoryTransactions);
orders.post('/', checkToken, ordersController.postOrders);

module.exports = orders;