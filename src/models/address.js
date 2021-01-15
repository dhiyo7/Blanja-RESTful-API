const db = require("../config/mySQL");

module.exports = {
  postAddress: (req, user_id) => {
    return new Promise((resolve, reject) => {
      const queryString = "INSERT INTO address SET ?";
      db.query(queryString, [req, user_id], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  updateAddress: (update, idUser) => {
    return new Promise((resolve, reject) => {
      const queryString = "UPDATE address SET ? WHERE ?";
      db.query(queryString, [update, idUser], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  getAddressByUserId: (user_id) => {
    return new Promise((resolve, reject) => {
      const queryString =
        // "SELECT a.id, a.address, u.id, u.full_name FROM alamat AS a JOIN users AS u ON u.id = a.id_user WHERE a.id = ?";
        `SELECT a.id, a.address_street, u.id, u.full_name FROM address AS a JOIN users AS u ON u.id = a.user_id WHERE a.user_id = ? GROUP BY a.id`
      db.query(queryString, user_id, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
};
