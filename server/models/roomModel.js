var mongoose = require("mongoose");
const { Schema } = mongoose;

const roomSchema = new Schema(
  {
    hotelName: {
      type: String,
      required: true,
    },
    roomName: {
      type: String,
      required: true,
    },

    maxcount: {
      type: Number,
      required: true,
    },
    phonenumber: {
      type: Number,
      required: true,
    },
    rent: {
      type: Number,
      required: true,
    },
    imgurls: [],
    currentbookings: [],
    roomtype: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("rooms", roomSchema);
