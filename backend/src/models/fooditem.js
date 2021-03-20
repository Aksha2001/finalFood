const mongoose = require('mongoose')
const foodItemSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },

    rating : {
        type : String,
        required : true
    },

    price : {
        type : Number,
        required: true
    }

})

module.exports = mongoose.model('FoodItem', foodItemSchema)