const db = require("../config/mySQL");

module.exports = {
  categoryAll: () => {
    return new Promise((resolve, reject) => {
      const queryString = "SELECT * FROM categories";
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
      const queryString = "SELECT * FROM categories WHERE id = "+ params;
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  editCategory: (req, params) => {
    return new Promise((resolve, reject) => {
      const queryString = "UPDATE categories SET ? WHERE id = "+ params;
      db.query(queryString, req, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  
  postCategory: (req) => {
    return new Promise((resolve, reject) => {
      const queryString = "INSERT INTO categories SET ?";
      db.query(queryString, req, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  deleteCategory: (params) => {
    return new Promise((resolve, reject) => {
      const queryString = "DELETE FROM categories WHERE id = "+ params;
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
