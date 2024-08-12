const { Router } = require('express');

const { createRecipeModel } = require("../services/create");

const createRecipe = Router();


createRecipe.post('/recipes', async (req, res) => {
    const data = req.body;


    const createData = {
        title: data.title,
        info: data.info,
        image: data.image,
        preparing: {
            quantity: data.quantity,
            amount: data.amount,
            time: data.time,
            aditional: data.aditional
        }
    }

    try {
        await createRecipeModel(createData);
        res.status(200).json('Succsefull')

    } catch (error) {
        console.log(error)
    }
})

module.exports = { createRecipe }

