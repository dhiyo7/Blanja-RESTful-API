const db = require("../config/mySQL");

module.exports = {
  sizeAll: () => {
    return new Promise((resolve, reject) => {
      const queryString = "SELECT * FROM size";
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
