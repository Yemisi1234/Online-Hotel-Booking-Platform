const rooms = require("../models/roomModel");


async function getAllRooms(req, res) {
  try {
    const allRooms = await rooms.find({});
    return res.status(200).send(allRooms);
  } catch (err) {
    return res.status(200).json({ err });
  }
}

async function getSingleRoom(req, res, id) {
  id = req.params.id;
  try {
    let room = await rooms.findOne({ _id: id });
    return res.status(200).send(room);
  } catch (err) {
    return res.status(200).json({ err });
  }
}

module.exports = { getAllRooms, getSingleRoom };
