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

  postOrders: (body, level, user_id) => {
    const total = body.item.map((data) => {
      return data.sub_total_item;
    });

    const newTotal = total.reduce((a, b) => {
      return a + b;
    });

    const bodyOrder = {
      transaction_code: body.transaction_code,
      total: newTotal,
      user_id: user_id,
      // level: level
    };

    return new Promise((resolve, reject) => {
      if (level !== 1) {
        reject({
          msg: "your level is not match to create orders",
          status: 401,
        });
      } else {
        const queryString = "INSERT INTO orders SET ?";
        db.query(queryString, [bodyOrder], (err, data) => {
          // console.log('anjim ', bodyOrder);
          const queryOrderDetails = "INSERT INTO order_details SET ?";
          body.item.map((results) => {
            const dataOrderDetail = {
              ...results,
              order_id : data.insertId
            };
            db.query(queryOrderDetails, dataOrderDetail);
          });
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
