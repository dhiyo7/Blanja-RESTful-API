const db = require("../config/mySQL");

module.exports = {
  // getHistoryTransactions: (level) => {
  //   return new Promise((resolve, reject) => {
  //     const queryString = "SELECT * FROM history_transactions";
  //     if (level > 1) {
  //       reject({
  //         msg: "your level is too high to create history",
  //         status: 401,
  //       });
  //     } else {
  //       db.query(queryString, (err, data) => {
  //         if (!err) {
  //           resolve(data);
  //         } else {
  //           reject(err);
  //         }
  //       });
  //     }
  //   });
  // },

  getAllTransaction: () => {
    return new Promise((resolve, reject) => {
      const queryString = [
        "SELECT * FROM orders",
        "SELECT od.order_id, p.product_name, c.category_name, s.size, cl.color_name, cd.conditions, st.name, od.product_qty, od.sub_total_item FROM order_details as od INNER JOIN products as p ON od.product_id = p.id INNER JOIN categories as c ON p.category_id = c.id_categories INNER JOIN size as s ON p.size_id = s.id INNER JOIN colors as cl ON p.color_id = cl.id INNER JOIN conditions as cd ON p.condition_id = cd.id INNER JOIN status_product as st ON p.status_product_id = st.id",
      ];
      db.query(queryString.join(";"), (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          console.log(err);
          reject(err);
        }
      });
    });
  },

  getTransactionById: (order_id) => {
    return new Promise((resolve, reject) => {
      const queryString = [
        `SELECT * FROM orders WHERE id = ${order_id}`,
        `SELECT od.order_id, p.product_name, c.category_name, s.size, cl.color_name, cd.conditions, st.name, od.product_qty, od.sub_total_item FROM order_details as od INNER JOIN products as p ON od.product_id = p.id INNER JOIN categories as c ON p.category_id = c.id_categories INNER JOIN size as s ON p.size_id = s.id INNER JOIN colors as cl ON p.color_id = cl.id INNER JOIN conditions as cd ON p.condition_id = cd.id INNER JOIN status_product as st ON p.status_product_id = st.id WHERE order_id=${order_id}`,
      ];
      db.query(queryString.join(";"), (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          console.log(err);
          reject(err);
        }
      });
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
              order_id: data.insertId,
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
