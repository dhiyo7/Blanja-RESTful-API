const db = require("../config/mySQL");

module.exports = {
  productAll: () => {
    return new Promise((resolve, reject) => {
      const queryString = `SELECT *, AVG(rating) as rating FROM products 
            INNER JOIN ratings ON products.id = ratings.product_id GROUP BY products.id`;
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  getProductById: (params) => {
    return new Promise((resolve, reject) => {
      const queryString = `SELECT *, AVG(rating) as rating FROM products
        INNER JOIN ratings ON products.id = ratings.product_id WHERE products.id = ${params} GROUP BY products.id`;
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  postProduct: (req) => {
    return new Promise((resolve, reject) => {
      const queryString = "INSERT INTO products SET ?";
      db.query(queryString, req, (err, data) => {
        if (!err) {
          resolve(data);
          const newRating = {
            product_id: data.insertId,
            rating: 1,
          };
          const queryString1 = "INSERT INTO ratings SET ?";
          db.query(queryString1, newRating);
        } else {
          reject(err);
        }
      });
    });
  },

  editProduct: (req, params) => {
    return new Promise((resolve, reject) => {
      const queryString = "UPDATE products SET ? WHERE id = " + params;
      db.query(queryString, req, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  deleteProduct: (params) => {
    return new Promise((resolve, reject) => {
      const queryString = "DELETE FROM products WHERE id = ?";
      db.query(queryString, params, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
};
