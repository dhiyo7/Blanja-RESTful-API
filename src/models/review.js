const db = require("../config/mySQL");

module.exports = {
  getAllReview: () => {
    return new Promise((resolve, reject) => {
      const queryString = [
        `SELECT p.id, p.product_name, c.category_name, s.size, cl.color_hexa, cd.conditions, p.product_price, p.product_qty, p.product_desc, p.product_photo,  AVG(rating) as rating FROM products as p
            INNER JOIN categories as c ON p.category_id = c.id_categories
            INNER JOIN size as s ON p.size_id = s.id
            INNER JOIN colors as cl ON p.color_id = cl.id
            INNER JOIN conditions as cd ON p.condition_id = cd.id
            INNER JOIN ratings ON p.id = ratings.product_id
            GROUP BY p.id`,
        `SELECT r.id, r.product_id, u.full_name, r.review FROM reviews as r INNER JOIN products as p ON r.product_id = p.id INNER JOIN users as u ON r.user_id = u.id
            `,
      ];
      db.query(queryString.join(";"), (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  getReviewById: (id) => {
    return new Promise((resolve, reject) => {

      const queryString = [
        `SELECT p.id, p.product_name, c.category_name, s.size, cl.color_hexa, cd.conditions, p.product_price, p.product_qty, p.product_desc, p.product_photo,  AVG(rating) as rating FROM products as p
            INNER JOIN categories as c ON p.category_id = c.id_categories
            INNER JOIN size as s ON p.size_id = s.id
            INNER JOIN colors as cl ON p.color_id = cl.id
            INNER JOIN conditions as cd ON p.condition_id = cd.id
            INNER JOIN ratings ON p.id = ratings.product_id
            WHERE p.id = ${id}
            GROUP BY p.id`,
        `SELECT r.id, r.product_id, u.full_name, r.review FROM reviews as r INNER JOIN products as p ON r.product_id = p.id INNER JOIN users as u ON r.user_id = u.id WHERE r.product_id = ${id}
            `,
      ];
      db.query(queryString.join(";"), (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  postReview: (body, user_id, res) => {
    const newBody = {
      ...body,
      user_id: user_id,
    };
    return new Promise((resolve, reject) => {
      const queryCheckUser = 'SELECT user_id FROM reviews WHERE user_id='+user_id;
      db.query(queryCheckUser, (err, data) => {
        console.log(data.length);
        if(data.length === 0){
          const queryString = "INSERT INTO reviews SET ?";
          db.query(queryString, newBody, (err, data) => {
            if (!err) {
              resolve(data);
            } else {
              reject(err);
            }
          });
        }else{
          reject(res.status(403).send({
            message: 'Anda sudah me-review produk ini',
            status: 403,
          }));
        }
      })
      // const queryString = "INSERT INTO reviews SET ?";
      // db.query(queryString, newBody, (err, data) => {
      //   if (!err) {
      //     resolve(data);
      //   } else {
      //     reject(err);
      //   }
      // });
    });
  },
};
