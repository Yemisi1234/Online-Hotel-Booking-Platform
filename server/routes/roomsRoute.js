var express = require("express");
var router = express.Router();

const {
  getAllRooms,
  getSingleRoom,
  addRoom,
} = require("../Controllers/roomsController");

router.get("/rooms/getAllRooms", getAllRooms);

router.get("/rooms/getRoom/:id", getSingleRoom);

router.post("/rooms/addroom", addRoom);

module.exports = router;
