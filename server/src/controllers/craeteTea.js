const { Router } = require('express');

const { create } = require("../services/teas");
const { parseError } = require('../utils/parseError');

const createTea = Router();


createTea.post('/tea', async (req, res) => {
    const { title, type, price, package, weight, serving, ingredients, image, life, description } = req.body


    try {
        await create({ title, type, price, package, weight, serving, ingredients, image, life, description });
        res.status(200).json("success")

    } catch (error) {
        res.status(500).json({ message: parseError(error) });
    }
})

module.exports = { createTea }
