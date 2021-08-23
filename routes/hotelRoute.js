const express = require("express");
const router = express.Router();
const Room = require("../models/room")
const mongoose = require("mongoose");
router.get("/getallhotels", async (req, res) => {
   
     try {
          const hotels = await Room.find()
     res.send(hotels)
     } catch (error) {
          return res.status(400).json({ message: 'something went wrong' });
     }

});


router.post("/gethotelbyid", async(req, res) => {
     console.log(req.body);
     try {
          const hotel = await Hotel.findOne({'_id' : req.body.hotelid})
          res.send(hotel)
     } catch (error) {
          return res.status(400).json({ message: error });
     }
});

router.get("/getallhotels", async(req, res) => {
     console.log(req.body);
     try {
          const hotels = await Hotel.find({})
          res.send(hotels)
     } catch (error) {
          return res.status(400).json({ message: error });
     }
});

router.post("/addhotel", async(req, res) => {
  const { owner , hotelName ,phonenumber ,email ,address, hotelImage} = req.body

     const newhotel = new Hotel({
          owner,
          hotelName, 
          phonenumber ,
          email,
          address,
          hotelImage 
     })
     try {
          await newhotel.save()
          res.send('New Hotel Added Successfully')
     } catch (error) {
          return res.status(400).json({ error });
     }
});
   

module.exports = router