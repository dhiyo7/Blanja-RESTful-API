const express = require("express");
const logger = require("morgan");
const mainRouter = require("./src/routes/index");
const app = express();
const port = 8005;
// listen port
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});

// menambahkan logger
app.use(logger("dev"));

// menambahkan parser untuk x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// extended: false => menggunakan qs
// extended: true => menggunakan querystring

// menambahkan parser untuk raw json
app.use(express.json());

app.use("/", mainRouter);
// Handle all 404 responses
app.use(function (req, res, next) {
  res.status(404).json({
    msg: "Data Not Found",
    status: 404,
  });
});
