const express = require('express');
const app = express();
const port = 8000
const mysql = require('mysql')

// listen port
app.listen(port, () => {
    console.log(`server running in port ${port}`);
})

// koneksi ke db
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blanja_db'
})

// cek koneksi ke db
connection.connect((err) => {
    if (err) throw err;
    console.log('koneksi ke db sukses');
})

app.get('/', (req, res) => {
    res.send('Backend Blanja')
})

app.get('/products' , (req, res) => {
    let sql = "SELECT * FROM products"
    res.send()
})
