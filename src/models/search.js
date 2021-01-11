const db = require("../config/mySQL");

module.exports = {
  searchProduct: (keyword) => {
    return new Promise((resolve, reject) => {
      const queryString = `SELECT * FROM products
                INNER JOIN categories ON products.category_id = categories.id_categories
                WHERE categories.category_name LIKE "%${keyword}%" OR products.product_name LIKE "%${keyword}%"`;
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
