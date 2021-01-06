const productsModel = require("../models/products");
const form = require("../helpers/form");

module.exports = {
  productAll: (req, res) => {
    const { query } = req;
    const limit = Number(query.limit) || 15;
    const page = Number(query.page) || 1;
    const offset = (page - 1) * limit || 0;
    productsModel
      .productAll(limit, offset, page)
      .then((data) => {
        if (Math.ceil(data.products / limit) == data.products) {
          res.status(404).json({
            msg: "Data Not Found",
            status: 404,
          });
        } else {
          form.success(res, data);
        }
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
    const level = req.decodedToken.level_id;
    const user_id = req.decodedToken.id;
    const filepath = JSON.stringify(
      req.files.map((e) => 'http://localhost:8007'+"/image" + "/" + e.filename + " ")
    );
    const insertBody = {
      ...body,
      product_photo: filepath,
    };
    console.log(level);
    productsModel
      .postProduct(insertBody, level, user_id, res, filepath)
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
    const { id } = req.params;
    const level = req.decodedToken.level_id;
    console.log(level);
    const singlePath = JSON.stringify(
      req.files.map((e) => 'http://localhost:8007'+"/image" + "/" + e.filename + " ")
    );
    const insertBody = { ...body, product_photo: singlePath };

    productsModel
      .editProduct(insertBody, id, res, level)
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
    const level = req.decodedToken.level_id;
    productsModel
      .deleteProduct(id, level)
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

  getProductByUserId: (req, res) => {
    const user_id = req.decodedToken.id;
    console.log("KONTOL"+req.decodedToken.id);
    productsModel
      .getProductByUserId(user_id)
      .then((data) => {
        form.success(res, data);
      })
      .catch((err) => {
        form.error(res, err);
      });
  },
};
