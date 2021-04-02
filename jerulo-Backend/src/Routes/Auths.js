const express = require('express');
const router = express.Router();

const { signup, signin } = require('../Controller/Auths');
const { requestValidateSignup, requestValidateSignin, isRequestValidated } = require('../validators/auths');

router.post('/signin', requestValidateSignin, isRequestValidated, signin);

router.post('/signup', requestValidateSignup, isRequestValidated, signup);










module.exports = router;