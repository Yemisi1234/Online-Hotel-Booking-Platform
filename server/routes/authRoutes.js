var express = require("express");
var router = express.Router();

var { register, login } = require("../Controllers/authControllers");

/*Post Request to Register Client*/
router.post("/register", register);

/*Post Request to login Client*/
router.post("/login", login);

module.exports = router;
