const orderModel = require("../models/orders");
const form = require("../helpers/form");

module.exports = {
  getHistoryTransactions: (req, res) => {
    // console.log("INI HISTORY");
    const level = req.decodedToken.level_id;
    orderModel
      .getHistoryTransactions(level)
      .then((data) => {
        form.success(res, data);
      })
      .catch((err) => {
        form.error(res, err);
      });
  },

  postOrders: (req, res) => {
    const { body } = req;
    const user_id = req.decodedToken.id;
    const level = req.decodedToken.level_id;
    const insertBody = { ...body };

    // console.log("reqKontol ",req);
    console.log('data Body ',insertBody);
    console.log('userID ',user_id);
    orderModel
      .postOrders(insertBody, level, user_id)
      .then((data) => {
        console.log('KONTOL ',data.insertId);
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
