const { Router } = require('express');

const { create } = require("../services/teas");

const createTea = Router();


createTea.post('/tea', async (req, res) => {
    const {title,type,price,package,weight,serving,ingredients,image,life,description} = req.body


    try {
        await create({title,type,price,package,weight,serving,ingredients,image,life,description});
        res.send('Succsefull')

    } catch (error) {
        console.log(error)
    }
})

module.exports = {createTea}
