const db = require("../config/mySQL");

module.exports = {
  productAll: (limit, offset, page) => {
    return new Promise((resolve, reject) => {
      // const queryString = `SELECT *, AVG(rating) as rating FROM products
      //       INNER JOIN ratings ON products.id = ratings.product_id GROUP BY products.id`;
      const queryString = `SELECT p.id, p.product_name, c.category_name, s.size, cl.color_hexa, cd.conditions, p.product_price, p.product_qty, p.product_desc, p.product_photo,  AVG(rating) as rating FROM products as p
      INNER JOIN categories as c ON p.category_id = c.id
      INNER JOIN size as s ON p.size_id = s.id
      INNER JOIN colors as cl ON p.color_id = cl.id
      INNER JOIN conditions as cd ON p.condition_id = cd.id
      INNER JOIN ratings ON p.id = ratings.product_id
      GROUP BY p.id LIMIT ? OFFSET ?`;
      db.query(queryString, [limit, offset, page], (err, data) => {
        const newResult = {
          products: data,
          pageInfo: {
            currentPage: page,
            previousPage:
              page === 1 ? null : `/products?page=${page - 1}&limit=${limit}`,
            nextPage: page === limit !== data.length && 
            limit !== data.length ? null : `/products?page=${page + 1}&limit=${limit}`,
          },
        };
        if (!err) {
          resolve(newResult);
        } else {
          reject(err);
        }
      });
    });
  },

  getProductById: (params) => {
    return new Promise((resolve, reject) => {
      // const queryString = `SELECT *, AVG(rating) as rating FROM products
      //   INNER JOIN ratings ON products.id = ratings.product_id WHERE products.id = ${params} GROUP BY products.id`;
      const queryString = `SELECT p.id, p.product_name, c.category_name, s.size, cl.color_hexa, cd.conditions, p.product_price, p.product_qty, p.product_desc, p.product_photo,  AVG(rating) as rating FROM products as p
      INNER JOIN categories as c ON p.category_id = c.id
      INNER JOIN size as s ON p.size_id = s.id
      INNER JOIN colors as cl ON p.color_id = cl.id
      INNER JOIN conditions as cd ON p.condition_id = cd.id
      INNER JOIN ratings ON p.id = ratings.product_id WHERE p.id = ${params}
      GROUP BY p.id`;
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
