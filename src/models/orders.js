const db = require("../config/mySQL");

module.exports = {
  getHistoryTransactions: (level) => {
    return new Promise((resolve, reject) => {
      const queryString = "SELECT * FROM history_transactions";
      if (level > 1) {
        reject({
          msg: "your level is too high to create history",
          status: 401,
        });
      } else {
        db.query(queryString, (err, data) => {
          if (!err) {
            resolve(data);
          } else {
            reject(err);
          }
        });
      }
    });
  },

  postHistoryTransactions: (req, level) => {
    return new Promise((resolve, reject) => {
      const queryString = "INSERT INTO history_transactions SET ?";
      if (level === 1) {
        reject({
          msg: "your level is too high to create history",
          status: 401,
        });
      } else {
        db.query(queryString, [req, level], (err, data) => {
          if (!err) {
            resolve(data);
          } else {
            reject(err);
          }
        });
      }
    });
  },
};
