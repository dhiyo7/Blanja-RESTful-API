const orderModel = require("../models/orders");
const form = require("../helpers/form");

module.exports = {
  getAllOrdersHistory: (req, res) => {
    const { body } = req;
    console.log("CEK ",req.decodedToken);
    const user_id = req.decodedToken.id;
    const level = req.decodedToken.level_id;


    orderModel
      .getAllOrdersHistory(level, user_id)
      .then((data) => {
        form.nestedAll(res, data);
      })
      .catch((error) => {
        res.status(500).send({
          message: "failed",
          status: false,
          error: error,
        });
      });
  },

  getTransactionById: (req, res) => {
    const { id } = req.params;
    const user_id = req.decodedToken.id;

    orderModel
      .getOrderById(id, user_id)
      .then((data) => {
        form.nestedOne(res, data);
      })
      .catch((error) => {
        res.status(500).send({
          message: "failed",
          status: false,
          error: error,
        });
      });
  },

  postOrders: (req, res) => {
    const { body } = req;
    const user_id = req.decodedToken.id;
    const level = req.decodedToken.level_id;
    const insertBody = { ...body };

    // console.log("reqKontol ",req);
    console.log("data Body ", insertBody);
    console.log("userID ", user_id);
    orderModel
      .postOrders(insertBody, level, user_id)
      .then((data) => {
        console.log("KONTOL ", data.insertId);
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
