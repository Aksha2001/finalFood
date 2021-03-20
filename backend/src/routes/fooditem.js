const express = require('express')
//const { signup, signin } = require('../controller/auth')
//const { validateSignupRequest, validateSigninRequest, isRequestValidated } = require('../../src/validator/auth')
const fooditem = require('../controller/fooditem')
const router = express.Router()

router.post('/fooditems/create', function(req, res){
    fooditem})

// router.post('/fooditems/getFooditems', validateSignupRequest ,isRequestValidated ,signup)

module.exports = router