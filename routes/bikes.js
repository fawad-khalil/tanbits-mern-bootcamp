const express = require('express');
const { default: mongoose } = require('mongoose');
const Bikes = require('../models/bikes');
const router = express.Router();

// const bikes = new Bikes();

router.get('/', (req, res, next) => {
  console.log('Middleware');
  next();
}, async (req, res) => {
  const bikesRes = await Bikes.find({});
  res.status(200).json(bikesRes);
});

module.exports =router;
router.post('/', (req, res) => {
  const {make, model} = req.body;

  const newBike = new Bikes({
    make,
    model,
    isRented: false,
  });

  newBike.save();

  res.status(200).json("success");
});
// router.put('/', ()=> {});

