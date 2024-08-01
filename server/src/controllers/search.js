const { Router } = require('express');

const { Tea } = require('../models/Data');

const search = Router();

search.get('/search', async (req, res) => {
    const query = req.query.q;

    try {
        const results = await Tea.find({ title: { $regex: query, $options: 'i' } });
        res.status(200).json(results);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = { search }