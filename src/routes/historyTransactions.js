const express = require("express");
const historyTransactionsRouter = express.Router();
const historyTransactionsController = require("../controllers/historyTransactions");
const checkToken = require("../helpers/middlewares/checkToken");


historyTransactionsRouter.get('/', checkToken, historyTransactionsController.getHistoryTransactions);
historyTransactionsRouter.post('/', checkToken, historyTransactionsController.postHistoryTransactions);

module.exports = historyTransactionsRouter;