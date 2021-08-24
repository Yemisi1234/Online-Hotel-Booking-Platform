const clusterbooking = require("../models/bookingModel");

async function bookings(req, res) {
  try {
    let allBooks = await clusterbooking.find({});
    return res.status(200).send(allBooks);
  } catch (err) {
    res.status(400).json({ err });
  }
}

module.exports = { bookings };
