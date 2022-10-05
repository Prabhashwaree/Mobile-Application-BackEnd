const express = require("express");
const app = express();
const router = express.Router();

const Vehicle = require("../model/vehicle.model");
app.use(express.json());

router.get("/", async (req, res) => {
      res.send("Nethmini");
      console.log("neth");
    
  });
  
  router.get("/:id", async (req, res) => {});
  
  router.post("/", async (req, res) => {
   const vehicle = new Vehicle({
    Reg_Number: req.body.Reg_Number,
    Brand: req.body.Brand,
    Price: req.body.Price,
    Fuel_Type: req.body.Fuel_Type,
    Date: req.body.Date,
    Location: req.body.Location,

   })

   try {
    const response = await vehicle.save();
    res.json(response);
  } catch (err) {
    res.send("Err: " + err);
  }

  });
  
  router.delete("/:id", async (req, res) => {
    try {
        const vehical = await Vehicle.findById(req.params.id);
        const response = await vehical.remove();
        res.json(response);
      } catch (err) {
        res.send("Err: " + err);
      }
  });
  
  router.put("/:id", async (req, res) => {
    try {
        const vehical = await Vehicle.findById(req.params.id);
        vehical.Reg_Number = req.body.Reg_Number;
        vehical.Brand = req.body.Brand;
        vehical.Price = req.body.Price;
        vehical.Fuel_Type = req.body.Fuel_Type;
        vehical.Date = req.body.Date;
        vehical.Location = req.body.Location;
    
        const response = await vehical.save();
        res.json(response);
      } catch (err) {
        res.send("Err: " + err);
      }
  });
  
  module.exports = router;
