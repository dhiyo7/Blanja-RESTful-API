const express = require("express");
const historyTransactionsRouter = express.Router();
const historyTransactionsController = require("../controllers/historyTransactions");

historyTransactionsRouter.get('/', historyTransactionsController.getHistoryTransactions);
historyTransactionsRouter.post('/', historyTransactionsController.postHistoryTransactions);

module.exports = historyTransactionsRouter;