
var express = require("express");
var router = express.Router();

var { sendStatus, register } = require("../Controllers/authControllers");
/* GET home page. */
router.get("/:message", sendStatus);

/*Post Request*/
router.post("/register", register);

module.exports = router;
