const { Router } = require('express');
const { body, validationResult } = require('express-validator');
const { createToken } = require('../services/jwt');
const { login, register, update } = require('../services/user');
const { parseError } = require('../utils/parseError');
const { User } = require('../models/User');
const { validateObjectId } = require('../middlewares/guards');


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
                role: result.role,
                accessToken

            })



        } catch (error) {
            res.status(403).json({ code: 403, message: 'Incorect username or password!' })
        }
    })

userRouter.post('/register',
    body('email').trim().isEmail().withMessage('Please enter valid email'),
    body('password').trim().isLength({ min: 6 }).withMessage('Password must be atleast 6 characters'),
    body('username').trim().isLength({ min: 4 }).withMessage('Username must be atleast 4 characters'),
    body('tel').trim().notEmpty().withMessage('Telphone number canot be empty'),
    body('role').optional().isIn(['admin', 'user']).withMessage('Invalid role'),
    async (req, res) => {
        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors
            }

            const { username, email, password, tel, role } = req.body;

            const userRole = role || 'user';

            const result = await register(username, email, password, tel, userRole);
            const accessToken = createToken(result);
            res.status(201).json({
                _id: result._id,
                username: result.username,
                email: result.email,
                tel: result.tel,
                role: userRole,
                accessToken

            })

        } catch (err) {
            const parsed = parseError(err)
            res.status(403).json({ code: 403, message: parsed.message })
        }
    })

userRouter.put('/update/:id', body('email').trim().isEmail().withMessage('Please enter valid email'),
    body('username').trim().isLength({ min: 4 }).withMessage('Username must be atleast 4 characters'),
    body('tel').trim().notEmpty().withMessage('Telphone number canot be empty'),
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

userRouter.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve users', error: error.message });
    }
})

userRouter.put('/:id', validateObjectId(), async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedData = req.body;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        Object.assign(user, updatedData);

        const updatedUser = await user.save();

        res.status(200).json(updatedUser);
    } catch (error) {
        console.error("Update Error:", error);
        res.status(500).json({ message: 'An error occurred while updating the user', error: error.message });
    }
})



module.exports = { userRouter };