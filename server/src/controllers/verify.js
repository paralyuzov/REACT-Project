const { Router } = require('express');
const { verifyToken } = require('../services/jwt');


const verifyRouter = Router();


verifyRouter.post('/', (req, res) => {
    try {
        const data = verifyToken(req.body.token);
        res.json(data);
    } catch (error) {
        res.status(401).json({ message: "Session expired!" })
    }

});



module.exports = { verifyRouter }