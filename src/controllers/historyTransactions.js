const historyTransactionsModel = require("../models/historyTransactions");
const form = require("../helpers/form");

module.exports = {
  getHistoryTransactions: (_, res) => {
    // console.log("INI HISTORY");
    historyTransactionsModel
      .getHistoryTransactions()
      .then((data) => {
        form.success(res, data);
      })
      .catch((err) => {
        form.error(res, err);
      });
  },

  postHistoryTransactions: (req, res) => {
    const { body } = req;
    const insertBody = { ...body };

    historyTransactionsModel
      .postHistoryTransactions(insertBody, res)
      .then((data) => {
        const newResObj = {
          id: data.insertId,
          ...insertBody,
        };

        form.success(res, newResObj);
      })
      .catch((err) => {
        form.error(res, err);
      });
  },
};
