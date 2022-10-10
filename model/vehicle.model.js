const mongoose = require('mongoose')

const  VehicleSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
      },
    Reg_Number :{
        type:String,
        required: true,
        unique:true
    },
    Brand :{
        type:String,
        required: true,
        unique:true
    },
    Price :{
        type:String,
        required: true,
        unique:true
    },
    Fuel_Type:{
        type:String,
        required: true,
    },
    Date :{
        type:String,
        required: true,
        unique:true
    },
    Location :{
        type:String,
        required: true,
        unique:true
    },
   
})

module.exports = mongoose.model('Vehicle',VehicleSchema)