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

 async function addRoom(req, res) {
   const {
     room,
     rentperday,
     maxcount,
     description,
     phonenumber,
     type,
     image1,
     image2,
     image3,
   } = req.body;

   const newroom = new Room({
     name: room,
     rentperday,
     maxcount,
     description,
     phonenumber,
     type,
     imageurls: [image1, image2, image3],
     currentbookings: [],
   });
   try {
     await newroom.save();
     res.send("New Room Added Successfully");
   } catch (error) {
     return res.status(400).json({ error });
   }
 }

 module.exports = { getAllRooms, getSingleRoom, addRoom };
