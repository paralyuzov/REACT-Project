const { Router } = require('express');

const { createStoryModel } = require("../services/create");

const createStory = Router();


createStory.post('/story', async (req, res) => {
    const { story } = req.body


    try {
        await createStoryModel({ story });
        res.send('Succsefull')

    } catch (error) {
        console.log(error)
    }
})

module.exports = { createStory }