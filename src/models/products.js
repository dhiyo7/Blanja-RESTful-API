const db = require("../config/mySQL");

module.exports = {
  productAll: () => {
    return new Promise((resolve, reject) => {
      const queryString = "SELECT * FROM products";
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  getCategoryById: (params) => {
    return new Promise((resolve, reject) => {
      const queryString = "SELECT * FROM products WHERE id = " + params;
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
        } else {
          reject(err);
        }
      });
    });
  },

  editProduct: (req, params) => {
    return new Promise((resolve, reject) => {
      const queryString = "UPDATE products SET ? WHERE id = "+params;
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
