const db = require("../config/mySQL");

module.exports = {
  getHistoryTransactions: () => {
    return new Promise((resolve, reject) => {
      const queryString = "SELECT * FROM history_transactions";
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  postHistoryTransactions: (req, res) => {
    return new Promise((resolve, reject) => {
      const queryString = "INSERT INTO history_transactions SET ?";
      db.query(queryString, req, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
};
