var express = require("express");
var router = express.Router();

const { getAllRooms } = require("../Controllers/roomsController");

router.get("/getAllRooms", getAllRooms);

module.exports = router;
