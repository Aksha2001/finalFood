const { check, validationResult } = require('express-validator')

exports.validateSignupRequest = [
    check('firstname').notEmpty().withMessage('firstname is required'),
    check('lastname').notEmpty().withMessage('lastname is required'),
    check('email').notEmpty().withMessage('valid email is required'),
    check('password').notEmpty().withMessage('password must be at least 6 character long')
]

exports.validateSigninRequest =  [
    check('email').notEmpty().withMessage('valid email is required'),
    check('password').notEmpty().withMessage('password must be at least 6 character long')
]

exports.isRequestValidated = (req, res, next) => {
    const errors = validationResult(req)
    if(errors.array().length > 0){
        return res.status(400).json({ error: errors.array()[0].msg })
    }
    next()
}