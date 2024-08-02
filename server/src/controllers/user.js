const { Router } = require('express');
const { body, validationResult } = require('express-validator');
const { createToken } = require('../services/jwt');
const { login, register } = require('../services/user');
const { parseError } = require('../utils/parseError');


const userRouter = Router();

userRouter.post('/login',
    body('email').trim(),
    body('password').trim(),
    async (req, res) => {

        try {
            const result = await login(req.body.email, req.body.password);
            const accessToken = createToken(result);
            res.status(200).json({
                _id: result._id,
                username: result.username,
                email: result.email,
                tel: result.tel,
                accessToken

            })



        } catch (error) {
            res.status(403).json({ code: 403, message: 'Incorect username or password!' })
        }
    })

userRouter.post('/register',
    body('email').trim().isEmail().withMessage('Please enter valid email'),
    body('password').trim().isLength({ min: 6 }).withMessage('Password must be atleast 6 characters'),
    async (req, res) => {
        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors
            }


            const result = await register(req.body.username, req.body.email, req.body.password, req.body.tel);
            const accessToken = createToken(result);
            res.status(201).json({
                _id: result._id,
                username: result.username,
                email: result.email,
                tel: result.tel,
                accessToken

            })

        } catch (err) {
            const parsed = parseError(err)
            res.status(403).json({ code: 403, message: parsed.message })
        }
    })

module.exports = { userRouter };