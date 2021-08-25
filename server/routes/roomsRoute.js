var express = require("express");
var router = express.Router();

const {
  getAllRooms,
  getSingleRoom,
  addRoom,
  getRoomsByHotel,
} = require("../Controllers/roomsController");

router.get("/rooms/getAllRooms", getAllRooms);


router.post("/rooms/addroom", addRoom);

router.get("/getRoom/:id", getSingleRoom);

router.get('/rooms/getRooms/:hotel', getRoomsByHotel);

module.exports = router;
