const categoriesModel = require("../models/categories");
const productsModel = require("../models/products");
const form = require("../helpers/form");

module.exports = {
  categoryAll: (_, res) => {
    categoriesModel
      .categoryAll()
      .then((data) => {
        form.success(res, data);
      })
      .catch((err) => {
        form.error(res, err);
      });
  },

  getCategoryById: (req, res) => {
    const { id } = req.params;
    const { query } = req;
    const { keyword } = req.query;

    // Promise.all([productsModel.getProductById(id, res),categoriesModel.getCategoryById(id, res)])
    // .then((result) => {
    //   const finalResult = result.data;
    //   const products = result[0].data;
    //   console.log('Final ', finalResult);
    //   console.log('products ', products);
    //   // if (!finalResult || !products)
    //   // return res.status(404).json({ msg: "Recipe not found" });
    //   // finalResult.products = products;
    //   // res.status(200).json({
    //   //   msg: "Data Recipe successfully",
    //   //   status: 200,
    //   //   data: finalResult,
    //   // });
    // })
    // .catch((err) => res.status(500).json({ msg: err.message }));

    // console.log(body);
    console.log(id);
    categoriesModel
      .getCategoryById(id, res, keyword)
      .then((data) => {
        if (!data.length) {
          res.status(404).json({
            msg: "Data Not Found",
            status: 404,
          });
        } else {
          form.nested(res, data);
        }
      })
      .catch((err) => {
        form.error(res, err);
      });
  },

  editCategory: (req, res) => {
    const { body } = req;
    const insertBody = {
      ...body,
    };
    const { id } = req.params;
    categoriesModel
      .editCategory(insertBody, id, res)
      .then((data) => {
        // console.log(data);
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

  postCategory: (req, res) => {
    const { body } = req;
    const insertBody = {
      ...body,
    };
    console.log(insertBody);
    categoriesModel
      .postCategory(insertBody, res)
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
    console.log(req);
  },

  deleteCategory: (reqBody, res) => {
    const { id } = reqBody.params;
    // console.log(body);
    // console.log(id);
    categoriesModel
      .deleteCategory(id, res)
      .then((data) => {
        if (data.affectedRows === 0) {
          res.status(404).json({
            msg: "Data Not Found",
            status: 404,
          });
        } else {
          const resObject = {
            msg: "Data Deleted",
            status: 200,
          };
          res.json(resObject);
        }
      })
      .catch((err) => {
        form.error(res, err);
      });
  },
};
