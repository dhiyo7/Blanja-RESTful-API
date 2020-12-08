const authRouter = require("express").Router();
const authController = require("../controllers/auth");

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);

module.exports = authRouter;
