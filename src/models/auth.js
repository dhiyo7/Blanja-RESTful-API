const db = require("../config/mySQL");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  postNewUser: (body) => {
    return new Promise((resolve, reject) => {
      const email = body.email;
      const queryCheckEmail = 'SELECT email FROM users WHERE email=?';
      db.query(queryCheckEmail, email, (err, data) => {
        if(!data[0]){
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
        }else{
          reject({
            message: 'Email is already exists!',
            status: 403
          });
        }
      })
      
    });
  },

  postLogin: (body) => {
    return new Promise((resolve, reject) => {
      const { email, password } = body;
      const queryString =
        "SELECT id, level_id, email, full_name, password FROM users where email = ?";
      db.query(queryString, email, (err, data) => {
        if (err) {
          reject({
            msg: "Error SQL",
            status: 500,
            err,
          });
        }
        // Handle User Not Found","
        if (!data[0]) {
          reject({
            msg: "User Not Found",
            status: 404,
          });
        } else {
          // console.log(data);
          bcrypt.compare(password, data[0].password, (err, result) => {
            if (err) {
              reject({
                msg: "Hash Error",
                status: 500,
                err,
              });
            }
            if (!result) {
              reject({
                msg: "Wrong Password",
                status: 401,
              });
            } else {
              // const payload = { username, data[0].level_id };
              // console.log(data[0].level_id);

              const payload = {
                level_id: data[0].level_id,
                id: data[0].id,
                email: data[0].email,
              };

              const secret = process.env.SECRET_KEY;
              // const token = jwt.sign({email: data[0].email, level_id : data[0].level_id} , secret);
              const token = jwt.sign(payload, secret);
              resolve({
                token,
                full_name: data[0].full_name,
                email: data[0].email,
                user_id: data[0].id,
                level: data[0].level_id,
              });
              console.log(resolve);
            }
          });
        }
      });
    });
  },

  postLogout: (whitelisttoken) => {
    return new Promise((resolve, reject) => {
      const queryString = "DELETE FROM token_whitelist WHERE token=?";
      db.query(queryString, whitelisttoken, (err, data) => {
        if (data.affectedRows === 0) {
          reject({
            status: 404,
            msg: "token tidak ditemukan, login gagal",
          });
        }
        if (!err) {
          resolve({
            msg: `Logout berhasil`,
          });
        } else {
          reject({
            msg: `Logout gagal`,
          });
        }
      });
    });
  },
};
