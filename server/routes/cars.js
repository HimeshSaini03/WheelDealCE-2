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

/*  POST ROUTES  */
router.post("/", async (req, res) => {

    const {brand, rating, carName, model, price, speed, gps, seatType, automatic, description} = req.body;
  
    const file = req.file;
  
    const filePath = file ? file.path : '';
  
    console.log('file', file);
    console.log('filePath:', filePath);
  
    const myGps = gps ? "GPS Navigation" : "No GPS Navigation";
    const myAutomatic = automatic ? "Automatic" : "Manual";
  
    const newCar = new Car({
      brand,
      rating,
      carName,
      model,
      price,
      speed,
      gps: myGps,
      seatType,
      automatic: myAutomatic,
      description,
      imgUrl: file.filename
    });
  
    try
    {
      const savedCar = await newCar.save();
      res.status(200).send(savedCar);
    } 
    catch (error) {
      res.status(500).send({error: 'Error during saving car'}); 
      console.error('Error during saving car:', error);
    }
  });
  