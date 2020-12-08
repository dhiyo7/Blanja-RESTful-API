const db = require("../config/mySQL");
const bcrypt = require("bcrypt");

module.exports = {
  postNewUser: (body) => {
    return new Promise((resolve, reject) => {
      const saltRounds = 10;
      bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) {
          reject(err);
        }
        bcrypt.hash(body.password, salt, (err, hashedPassword) => {
          if (err) {
            reject(err);
          }
          const newBody = {
            ...body,
            password: hashedPassword,
          };
          const queryString = "INSERT INTO users SET ?";
          db.query(queryString, newBody, (err, data) => {
            if (!err) {
              resolve(data);
            } else {
              reject(err);
            }
          });
        });
      });
    });
  },
};
