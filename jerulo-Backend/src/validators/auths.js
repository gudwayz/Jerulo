const { check } = require('express-validator');
const { validationResult } = require('express-validator')


exports.requestValidateSignup = [
    check('firstName')
    .notEmpty()
    .withMessage('First name is required'),
    check('lastName')
    .notEmpty()
    .withMessage('Last name is required'),
    check('email')
    .isEmail()
    .withMessage('Valid eail is required'),
    check('password')
    .isLength({ min: 5 })
    .withMessage('Passowrd must be atleast 5 character long'),


];

exports.requestValidateSignin = [

    check('email')
    .isEmail()
    .withMessage('Valid eail is required'),
    check('password')
    .isLength({ min: 5 })
    .withMessage('Passowrd must be atleast 5 character long'),


];


exports.isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.array().length > 0) {
        return res.status(400).json({
            errors: errors.array()[0].msg
        })
    }
    next();

}