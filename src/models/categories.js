const db = require("../config/mySQL");

module.exports = {
  categoryAll: () => {
    return new Promise((resolve, reject) => {
      const queryString = "SELECT * FROM categories";
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  postCategory: () => {
    return new Promise((resolve, reject) => {
      const queryString = "INSERT INTO categories SET ?";
      db.query(queryString, insertBody, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
};
