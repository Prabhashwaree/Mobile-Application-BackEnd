const express = require("express");
const app = express();
const router = express.Router();

const User = require("../model/user.model");
app.use(express.json());

router.get("/", async (req, res) => {
      res.send("Nethmini");
      console.log("neth");
    
  });
  
  router.get("/:id", async (req, res) => {});
  
  router.post("/", async (req, res) => {
   const user = new User({
    Username :req.body.userName,
    Address :req.body.address,
    email :req.body.email,
    password:req.body.password,

   })

   try {
    const response = await user.save();
    res.json(response);
  } catch (err) {
    res.send("Err: " + err);
  }

  });
  
  router.delete("/:id", async (req, res) => {});
  
  router.put("/:id", async (req, res) => {});
  
  module.exports = router;
