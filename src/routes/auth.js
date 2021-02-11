const authRouter = require("express").Router();
const authController = require("../controllers/auth");

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
authRouter.post("/forgot", authController.forgotEmail);
authRouter.post("/findOTP", authController.checkOTP);
authRouter.patch("/reset", authController.resetPassword);
authRouter.delete("/logout", authController.logout);


module.exports = authRouter;
