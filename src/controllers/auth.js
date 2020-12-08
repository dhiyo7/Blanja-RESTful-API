const authModel = require("../models/auth");
const form = require("../helpers/form");

module.exports = {
  register: (req, res) => {
    const { body } = req;
    authModel.postNewUser(body).then(() => {
      form.success(res, {
        msg: "Register Berhasil",
        userData: {
          username: body.username,
        },
      });
    });
  },
  login: () => {},
};
