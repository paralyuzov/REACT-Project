const { Router } = require('express');
const { body, validationResult } = require('express-validator');
const { createToken } = require('../services/jwt');
const { login, register, update } = require('../services/user');
const { parseError } = require('../utils/parseError');
const { User } = require('../models/User');


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
    body('username').trim().notEmpty().withMessage('Username cannot be empty'),
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

userRouter.put('/update/:id', body('email').trim().isEmail().withMessage('Please enter valid email'),
    body('username').optional().trim().notEmpty().withMessage('Username cannot be empty'),
    async (req, res) => {
        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors
            }
            console.log(req.body.username);
            const result = await update(req.params.id, req.body.username, req.body.email, req.body.tel);
            const accessToken = createToken(result);
            res.status(201).json({
                _id: result._id,
                username: result.username,
                email: result.email,
                tel: result.tel,
                accessToken

            })


        } catch (error) {
            const parsed = parseError(error);
            res.status(403).json({ code: 403, message: parsed.message });
        }
    })

userRouter.delete('/delete/:id', async (req, res) => {
    try {

        const userId = req.params.id.toString();
        await User.findByIdAndDelete(userId);

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        const parsed = parseError(error);
        res.status(403).json({ code: 403, message: parsed.message });
    }
});

module.exports = { userRouter };