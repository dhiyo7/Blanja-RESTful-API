const mySQL = require("mysql");

// koneksi ke db
const db = mySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blanja_db'
})

// cek koneksi ke db
db.connect((err) => {
    if (err) throw err;
    console.log('koneksi ke db sukses');
})

module.exports = db;