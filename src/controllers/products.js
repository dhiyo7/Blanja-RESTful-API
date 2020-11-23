const productsModel = require("../models/products");
const form = require("../helpers/form");

module.exports = {
  productAll: (_, res) => {
    productsModel
      .productAll()
      .then((data) => {
        form.success(res, data);
      })
      .catch((err) => {
        form.error(res, err);
      });
  },

  getProductById: (req, res) => {
    const { id } = req.params;
    console.log(req);
    productsModel
      .getProductById(id)
      .then((data) => {
        if (!data.length) {
          res.status(404).json({
            msg: "Data Not Found",
            status: 404,
          });
        } else {
          form.success(res, data[0]);
        }
      })
      .catch((err) => {
        form.error(res, err);
      });
  },

  postProduct: (req, res) => {
    const { body } = req;
    const insertBody = {
      ...body,
    };
    productsModel
      .postProduct(insertBody, res)
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

  editProduct: (req, res) => {
    const { body } = req;
    const insertBody = { ...body };
    const { id } = req.params;

    productsModel
      .editProduct(insertBody, id, res)
      .then((data) => {
        if (data.affectedRows === 0) {
          res.status(404).json({
            msg: "Data Not Found",
            status: 404,
          });
        } else {
          const newResObj = {
            id: id,
            ...insertBody,
          };
          form.success(res, newResObj);
        }
      })
      .catch((err) => {
        form.error(res, err);
      });
  },

  deleteProduct: (req, res) => {
    const { id } = req.params;
    productsModel
      .deleteProduct(id)
      .then((data) => {
        if (data.affectedRows === 0) {
          res.status(404).json({
            msg: "Data Not Found",
            status: 404,
          });
        } else {
          const newResObj = {
            msg: "Data Deleted",
            status: 200,
          };
          res.json(newResObj);
        }
      })
      .catch((err) => {
        form.error(res, err);
      });
  },
};
