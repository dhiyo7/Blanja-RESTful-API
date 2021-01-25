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
        console.log(data);
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

    orderModel
      .postOrders(body, level, user_id)
      .then((data) => {
        const newResObj = {
          id: data.insertId,
          ...body,
        };
        form.success(res, newResObj);
      })
      .catch((err) => {
        form.error(res, err);
      });
  },
};
