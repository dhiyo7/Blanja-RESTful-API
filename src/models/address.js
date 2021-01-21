// const db = require("../config/mySQL");

// module.exports = {
//   postAddress: (req, user_id) => {
//     return new Promise((resolve, reject) => {
//       const queryString = "INSERT INTO address_customer SET ?";
//       db.query(queryString, [req, user_id], (err, data) => {
//         if (!err) {
//           resolve(data);
//         } else {
//           reject(err);
//         }
//       });
//     });
//   },

//   updateAddress: (req, idUser) => {
//     return new Promise((resolve, reject) => {
//       const queryString = "UPDATE address SET ? WHERE ?";
//       db.query(queryString, [update, idUser], (err, data) => {
//         if (!err) {
//           resolve(data);
//         } else {
//           reject(err);
//         }
//       });
//     });
//   },

//   getAddressByUserId: (user_id) => {
//     return new Promise((resolve, reject) => {
//       const queryString =
//         // "SELECT a.id, a.address, u.id, u.full_name FROM alamat AS a JOIN users AS u ON u.id = a.id_user WHERE a.id = ?";
//         `SELECT a.id, a.address_street, u.id, u.full_name FROM address AS a JOIN users AS u ON u.id = a.user_id WHERE a.user_id = ? GROUP BY a.id`
//       db.query(queryString, user_id, (err, data) => {
//         if (!err) {
//           resolve(data);
//         } else {
//           reject(err);
//         }
//       });
//     });
//   },
// };

const db = require("../config/mySQL");

module.exports = {
    addAddress: (req, user_id) => {
        return new Promise((resolve, reject) => {
            const qs = "INSERT INTO address_customer SET ?"
            db.query(qs, [req, user_id], (err, data) => {
                if (!err) {
                    resolve(data);
                } else{
                    reject(err);
                }
            })
        })
    },

    getAddressByUser: (user_id) => {
        return new Promise((resolve, reject) => {
            const queryString = "SELECT a.id_address, a.fullname, a.address, a.city, a.region, a.zip_code, a.country, u.id FROM address_customer AS a JOIN users AS u on u.id = a.id_user WHERE id_user = " + user_id;
            db.query(queryString, user_id, (err, data) => {
                if(!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    },

    // getAddressById: (user_id) => {
    //     return new Promise((resolve, reject) => {
    //         const queryString = "SELECT a.id_address, a.fullname, a.address, a.city, a.region, a.zip_code, a.country, u.id FROM shipping_address AS a JOIN users AS u on u.id = a.id_user WHERE a.id_address = ?"
    //         db.query(queryString, user_id, (err, data) => {
    //             if(!err) {
    //                 resolve(data)
    //             } else {
    //                 reject(err)
    //             }
    //         })
    //     })
    // },

    updateAddress: (req, id, user_id) => {
        return new Promise((resolve, reject) => {
            const queryString = "UPDATE address_customer SET ? WHERE id_address = " + id
            db.query(queryString, [req, user_id], (err, data) => {
                if(!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            });
        });
    },

    deleteAddress: (params, user_id) => {
        return new Promise((resolve, reject) => {
            const queryString = "DELETE FROM shipping_address WHERE id_address = ?"
            db.query(queryString, [params, user_id], (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    }
}
