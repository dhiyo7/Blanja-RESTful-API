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
  login: (req, res) => {
    const { body } = req;
    authModel
      .postLogin(body)
      .then((data) => {
        console.log(data);
          form.success(res, data)
      })
      .catch((err) => { 
        form.error(res, err);
      });
  },
};
