const { Router } = require('express');

const { createUtensilsModel } = require("../services/create");

const createUtensils = Router();


createUtensils.post('/utensils', async (req, res) => {
    const { title, price, package, image, description } = req.body


    try {
        await createUtensilsModel({ title, price, package, image, description });
        res.status(200).json("Successfull!")

    } catch (error) {
        console.log(error)
    }
})

module.exports = { createUtensils }
