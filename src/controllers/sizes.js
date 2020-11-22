const sizeModel = require("../models/sizes");
const form = require("../helpers/form");

module.exports = {
  sizeAll: (_, res) => {
    sizeModel
      .sizeAll()
      .then((data) => {
        form.success(res, data);
      })
      .catch((err) => {
        form.error(res, err);
      });
  },
};
