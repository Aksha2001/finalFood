const User = require('../../models/auth')
const jwt = require('jsonwebtoken')

exports.signup = (req, res) => {

    const {
        firstname,
        lastname,
        email,
        password
    } = req.body

    User.findOne({ email : email }).exec((error, user) => {
        if(user){
            res.status(400).json({
                "message" : "admin already registered"
            })
            }
        
        const _user = new User({
            firstname,
            lastname,
            email,
            password,
            username : Math.random().toString(),
            role : 'admin'
        })


    _user.save((error, data) => {
        if(error){
            res.status(400).json({
                "message" : "something went wrong"
            });
        }
        if(data){
            res.status(200).json({
                "user" : data
            })
        }
    })
    })
}


exports.signin = (req, res) => {

    User.findOne({ email : req.body.email }).exec((error, user) => {
        if(error){
            res.status(400).json({
                "message" : {error}
            })

        }

        if(user){

            if(user.authenticate(req.body.password && user.role === 'admin')){
                const token = jwt.sign({ _id : user._id }, process.env.JWT_SECRET, {expiresIn: "1h"})
                const { _id, firstname, lastname, username, role, email, fullname } = user
                res.status(200).json({
                    token,
                    user : {
                        _id,
                        firstname,
                        lastname,
                        username,
                        role,
                        email,
                        fullname
                    }
                });
            }else{
                res.status(400).json({
                    "message" : "invalid password"
                })
            }

        }
    
        else{
            res.status(400).json({
                "message" : "something went wrong"
            })
        } 
    })
}


