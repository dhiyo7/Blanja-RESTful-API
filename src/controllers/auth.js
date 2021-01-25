const authModel = require("../models/auth");
const form = require("../helpers/form");
const db = require("../config/mySQL");

async function whiteListToken(token) {
  await db.query("INSERT INTO token_whitelist SET token=?", token);
}

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
      .then(async (data) => {
        await whiteListToken(data.token);
        // console.log(data);
        form.success(res, data);
      })
      .catch((err) => {
        form.error(res, err);
      });
  },

  logout: (req, res) => {
    const bearerToken = req.header("x-access-token");
    if (!bearerToken) {
      res.json({
        msg: `token null`,
      });
    } else {
      const token = bearerToken.split(" ")[1];

      authModel
        .postLogout(token)
        .then((result) => {
          form.success(res, result);
        })
        .catch((err) => {
          form.error(res, err);
        });
    }
  },
};
