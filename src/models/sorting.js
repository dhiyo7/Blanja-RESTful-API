const db = require("../config/mySQL");

module.exports = {
  sortingProduct: (keyword) => {
    return new Promise((resolve, reject) => {
      const queryString = "SELECT * FROM products ORDER BY " + keyword;
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
};
