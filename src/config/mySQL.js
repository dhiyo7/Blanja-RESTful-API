const mySQL = require("mysql");

const { HOST, DB, user, password } = process.env;


console.log(HOST);
console.log(DB);
console.log(user);
console.log(password);

// koneksi ke db
const db = mySQL.createConnection({
    host: HOST,
    user: user,
    password: password,
    database: DB,
    multipleStatements: true
    // host: 'localhost',
    // user: 'root',
    // password: 'dhiyo007',
    // database: 'new_blanja_db',
    // multipleStatements: true
})

// cek koneksi ke db
db.connect((err) => {
    if (err) throw err;
    console.log('koneksi ke db sukses');
})

module.exports = db;