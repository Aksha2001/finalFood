const FoodItem = require('../models/fooditem')

exports.fooditem = (req, res) => {
    const fooditemObj = {
        name : req.body.name,
        rating : req.body.rating,
        price : req.body.price
    }

    const fitem = new FoodItem(fooditemObj)

    fitem.save((error, item) => {

        if(error){
            res.status(400).json({ error })
        }

        if(item){
            res.status(200).json({ item })
        }
    })
}