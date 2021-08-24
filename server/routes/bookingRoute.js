var express = require("express");
var router = express.Router();

const { bookings } = require("../Controllers/bookingsController");
// var { requireSignin } = require("../middlewares/middleware");

/*Post Request to Register Client*/
router.get("/getbookings", bookings);

module.exports = router;
