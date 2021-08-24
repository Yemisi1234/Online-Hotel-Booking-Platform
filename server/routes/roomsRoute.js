var express = require("express");
var router = express.Router();

const {
  getAllRooms,
  getSingleRoom,
} = require("../Controllers/roomsController");

router.get("/getAllRooms", getAllRooms);

router.get("/getRoom/:id", getSingleRoom);

module.exports = router;
