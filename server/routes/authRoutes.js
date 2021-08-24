var express = require("express");
var router = express.Router();

var {
  register,
  login,
  allUser,
  singleUser,
} = require("../Controllers/authControllers");

/*Post Request to Register Client*/
router.post("/register", register);

/*Post Request to login Client*/
router.post("/login", login);

//get all
router.get("/alluser", allUser);

//get all
router.get("/User/:id", singleUser);


module.exports = router;
