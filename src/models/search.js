const db = require("../config/mySQL");

module.exports = {
  searchProduct: (keyword) => {
    return new Promise((resolve, reject) => {
      const queryString = `SElECT * FROM products
            INNER JOIN categories ON products.category_id = categories.id
            WHERE products.product_name LIKE "%${keyword}%" OR categories.category_name LIKE "%${keyword}%"`;
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
