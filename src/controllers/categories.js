const categoriesModel = require("../models/categories");
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
  postCategory: (req, res) => {
    const { body } = req;
    const insertBody = {
      ...body,
      created_at: new Date(Date.now()),
      updated_at: new Date(Date.now()),
    };
    console.log(insertBody);
    categoriesModel
      .postCategory()
      .then((data) => {
          const newData = {
              data: {id: data.insertId, ...insertBody}
          }
        form.success(res, newData);
      })
      .catch((err) => {
        form.error(res, err);
      });
  },
};
