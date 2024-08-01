const { Router } = require('express');

const { createRecipeModel } = require("../services/create");

const createRecipe = Router();


createRecipe.post('/recipe', async (req, res) => {
    const { title, info, image, preparing } = req.body


    try {
        await createRecipeModel({ title, info, image, preparing });
        res.send('Succsefull')

    } catch (error) {
        console.log(error)
    }
})

module.exports = { createRecipe }

