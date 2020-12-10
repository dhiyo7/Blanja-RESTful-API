const historyTransactionsModel = require("../models/historyTransactions");
const form = require("../helpers/form");

module.exports = {
  getHistoryTransactions: (req, res) => {
    // console.log("INI HISTORY");
    const level = req.decodedToken.level_id;
    historyTransactionsModel
      .getHistoryTransactions(level)
      .then((data) => {
        form.success(res, data);
      })
      .catch((err) => {
        form.error(res, err);
      });
  },

  postHistoryTransactions: (req, res) => {
    const { body } = req;
    const level = req.decodedToken.level_id;
    const insertBody = { ...body };

    historyTransactionsModel
      .postHistoryTransactions(insertBody, res, level)
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
