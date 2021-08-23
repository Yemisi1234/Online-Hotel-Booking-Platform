const rooms = require("../models/roomModel");
const express = require("express");
const router = express.Router();

async function getAllRooms(req, res) {
  try {
    const allRooms = await rooms.find({});
    return res.status(200).send(allRooms);
  } catch (err) {
    return res.status(200).json({ err });
  }
}

module.exports = { getAllRooms };
