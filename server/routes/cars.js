const express = require('express');
const Car = require('../models/Car');
const fs = require('fs');
const path = require('path');

const router = express.Router();

/*  GET ROUTES  */
router.get("/", async (req, res) => {
  try
  {
    const cars = await Car.find();
    res.status(200).send(cars);
  } 
  catch (error) {
    res.status(500).send({error: 'Error during fetching cars'}); 
    console.error('Error during fetching cars:', error);
  }
});

router.get("/:id", async (req, res) => {
  try
  {
    const car = await Car.findById(req.params.id);

    if (!car) {
      return res.status(404).send({error: 'Car not found'});
    } 

    console.log('car:', car);

    const filePath = car.imgUrl;

    console.log('filePath:', filePath);

    const imagePath = path.join(__dirname, '../uploads', filePath);

    res.sendFile(imagePath);
  } 
  catch (error) {
    res.status(500).send({error: 'Error during fetching car'}); 
    console.error('Error during fetching car:', error);
  }
});

router.get("/data/:id", async (req, res) => {
  try
  {
    const car = await Car.findById(req.params.id);

    if (!car) {
      return res.status(404).send({error: 'Car not found'});
    } 

    res.status(200).send(car);
  } 
  catch (error) {
    res.status(500).send({error: 'Error during fetching car'}); 
    console.error('Error during fetching car:', error);
  }
});