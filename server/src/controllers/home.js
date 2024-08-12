const { Router } = require('express');
const { Tea } = require('../models/Data');
const { parseError } = require('../utils/parseError');
const { Utensils } = require('../models/Utensils');
const { default: mongoose } = require('mongoose');
const { Recipe } = require('../models/Recipe');
const { Story } = require('../models/Story');
const { validateObjectId } = require('../middlewares/guards');

const homeRouter = Router();

homeRouter.get('/matcha', async (req, res) => {
    try {
        const items = await Tea.find({ type: "matcha" });
        res.status(200).json(items)
    } catch (err) {
        res.status(500).send({ code: 500, error: parseError(err) });
    }
})

homeRouter.get('/matcha/:id', validateObjectId(), async (req, res) => {

    try {
        const item = await Tea.findById(req.params.id.trim()).lean();

        if (item) {
            res.status(200).json(item)
        } else {
            res.status(404).json({ message: 'item not found' });
        }

    } catch (err) {
        res.status(500).send({ code: 500, error: parseError(err) });
    }
})

homeRouter.get('/gyokuro', async (req, res) => {
    try {
        const items = await Tea.find({ type: "gyokuro" });
        res.status(200).json(items)
    } catch (err) {
        res.status(500).send({ code: 500, error: parseError(err) });
    }
})

homeRouter.get('/gyokuro/:id', validateObjectId(), async (req, res) => {

    try {
        const item = await Tea.findById(req.params.id.trim()).lean();

        if (item) {
            res.status(200).json(item)
        } else {
            res.status(404).json({ message: 'item not found' });
        }

    } catch (err) {
        res.status(500).send({ code: 500, error: parseError(err) });
    }
})

homeRouter.get('/sencha', async (req, res) => {
    try {
        const items = await Tea.find({ type: "sencha" });
        res.status(200).json(items)
    } catch (err) {
        res.status(500).send({ code: 500, error: parseError(err) });
    }
})

homeRouter.get('/sencha/:id', validateObjectId(), async (req, res) => {

    try {
        const item = await Tea.findById(req.params.id.trim()).lean();

        if (item) {
            res.status(200).json(item)
        } else {
            res.status(404).json({ message: 'item not found' });
        }

    } catch (err) {
        res.status(500).send({ code: 500, error: parseError(err) });
    }
})

homeRouter.get('/hojicha', async (req, res) => {
    try {
        const items = await Tea.find({ type: 'hojicha' });
        res.status(200).json(items);
    } catch (err) {
        res.status(500).send({ code: 500, error: parseError(err) });
    }
})

homeRouter.get('/hojicha/:id', validateObjectId(), async (req, res) => {

    try {
        const item = await Tea.findById(req.params.id.trim()).lean();

        if (item) {
            res.status(200).json(item)
        } else {
            res.status(404).json({ message: 'item not found' });
        }

    } catch (err) {
        res.status(500).send({ code: 500, error: parseError(err) });
    }
})

homeRouter.get('/teabags', async (req, res) => {
    try {
        const items = await Tea.find({ type: 'teabag' });
        res.status(200).json(items);
    } catch (err) {
        res.status(500).send({ code: 500, error: parseError(err) });
    }
})

homeRouter.get('/teabags/:id', validateObjectId(), async (req, res) => {

    try {
        const item = await Tea.findById(req.params.id.trim()).lean();

        if (item) {
            res.status(200).json(item)
        } else {
            res.status(404).json({ message: 'item not found' });
        }

    } catch (err) {
        res.status(500).send({ code: 500, error: parseError(err) });
    }
})

homeRouter.get('/organic', async (req, res) => {
    try {
        const items = await Tea.find({ type: 'organic' });
        res.status(200).json(items);
    } catch (err) {
        res.status(500).send({ code: 500, error: parseError(err) });
    }
})

homeRouter.get('/organic/:id', validateObjectId(), async (req, res) => {

    try {
        const item = await Tea.findById(req.params.id.trim()).lean();

        if (item) {
            res.status(200).json(item)
        } else {
            res.status(404).json({ message: 'item not found' });
        }

    } catch (err) {
        res.status(500).send({ code: 500, error: parseError(err) });
    }
})

homeRouter.get('/utensils', async (req, res) => {
    try {
        const items = await Utensils.find({});
        res.status(200).json(items);
    } catch (err) {
        res.status(500).send({ code: 500, error: parseError(err) });
    }
})

homeRouter.get('/utensils/:id', validateObjectId(), async (req, res) => {

    try {
        const item = await Utensils.findById(req.params.id.trim()).lean();

        if (item) {
            res.status(200).json(item)
        } else {
            res.status(404).json({ message: 'item not found' });
        }

    } catch (err) {
        res.status(500).send({ code: 500, error: parseError(err) });
    }
})

homeRouter.get('/top-favorites', async (req, res) => {

    try {
        const topFavorites = await mongoose.model('User').aggregate([
            { $unwind: "$favorite" },
            { $group: { _id: "$favorite", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 4 },
            {
                $lookup: {
                    from: "teas",
                    localField: "_id",
                    foreignField: "_id",
                    as: "tea"
                }
            },
            { $unwind: "$tea" }
        ]);

        res.status(200).json(topFavorites.map(item => item.tea));
    } catch (error) {
        res.status(500).send(error.message);
    }
})

homeRouter.get('/recipes', async (req, res) => {
    try {
        const items = await Recipe.find({});
        res.status(200).json(items);
    } catch (err) {
        res.status(500).send({ code: 500, error: parseError(err) });
    }
})

homeRouter.get('/recipes/:id', validateObjectId(), async (req, res) => {

    try {
        const item = await Recipe.findById(req.params.id.trim()).lean();

        if (item) {
            res.status(200).json(item)
        } else {
            res.status(404).json({ message: 'item not found' });
        }

    } catch (err) {
        res.status(500).send({ code: 500, error: parseError(err) });
    }
})

homeRouter.get('/story', async (req, res) => {
    try {
        const items = await Story.find({});
        res.status(200).json(items);
    } catch (err) {
        res.status(500).send({ code: 500, error: parseError(err) });
    }
})

homeRouter.get('/story/:id', validateObjectId(), async (req, res) => {

    try {
        const item = await Story.findById(req.params.id.trim()).lean();

        if (item) {
            res.status(200).json(item)
        } else {
            res.status(404).json({ message: 'item not found' });
        }

    } catch (err) {
        res.status(500).send({ code: 500, error: parseError(err) });
    }
})


homeRouter.get('/teas', async (req, res) => {
    try {
        const items = await Tea.find({});
        res.status(200).json(items);
    } catch (err) {
        res.status(500).send({ code: 500, error: parseError(err) });
    }
})

homeRouter.put('/teas/edit/:id', validateObjectId(), async (req, res) => {
    try {
        const teaId = req.params.id;
        const updatedTeaData = req.body;

        console.log("Received Update Data:", updatedTeaData);
        console.log("Tea ID:", teaId);

        const tea = await Tea.findById(teaId);

        if (!tea) {
            return res.status(404).json({ message: 'Tea not found' });
        }

        Object.assign(tea, updatedTeaData);

        const updatedTea = await tea.save();

        console.log("Updated Tea:", updatedTea);

        res.status(200).json(updatedTea);
    } catch (error) {
        console.error("Update Error:", error);
        res.status(500).json({ message: 'An error occurred while updating the tea', error: error.message });
    }
})

homeRouter.delete('/teas/:id', validateObjectId(), async (req, res) => {
    try {
        const teaId = req.params.id.toString();
        const deletedTea = await Tea.findByIdAndDelete(teaId);

        if (!deletedTea) {
            return res.status(404).json({ message: 'Tea not found' });
        }

        res.status(200).json({ message: 'Tea successfully deleted' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while deleting the tea', error: error.message });
    }
});

homeRouter.get('/utensils', async (req, res) => {
    try {
        const items = await Utensils.find({});
        res.status(200).json(items);
    } catch (err) {
        res.status(500).send({ code: 500, error: parseError(err) });
    }
})

homeRouter.put('/utensils/edit/:id', validateObjectId(), async (req, res) => {
    try {
        const utensilId = req.params.id;
        const updatedData = req.body;

        const utensils = await Utensils.findById(utensilId);

        if (!utensils) {
            return res.status(404).json({ message: 'Utensils not found' });
        }

        Object.assign(utensils, updatedData);

        const updatedUtensil = await utensils.save();



        res.status(200).json(updatedUtensil);
    } catch (error) {
        console.error("Update Error:", error);
        res.status(500).json({ message: 'An error occurred while updating the utensil', error: error.message });
    }
})

homeRouter.delete('/utensils/:id', validateObjectId(), async (req, res) => {
    try {
        const utensilId = req.params.id.toString();
        const deletedUtensil = await Utensils.findByIdAndDelete(utensilId);

        if (!deletedUtensil) {
            return res.status(404).json({ message: 'Utensil not found' });
        }

        res.status(200).json({ message: 'Utensil successfully deleted' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while deleting the utensil', error: error.message });
    }
});

homeRouter.put('/recipes/edit/:id', validateObjectId(), async (req, res) => {
    try {
        const recipeId = req.params.id;
        const data = req.body;

        const updatedData = {
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

        const recipe = await Recipe.findById(recipeId);

        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        Object.assign(recipe, updatedData);

        const updatedRecipe = await recipe.save();



        res.status(200).json(updatedRecipe);
    } catch (error) {
        console.error("Update Error:", error);
        res.status(500).json({ message: 'An error occurred while updating the utensil', error: error.message });
    }
})

homeRouter.delete('/recipes/:id', validateObjectId(), async (req, res) => {
    try {
        const recipeId = req.params.id.toString();
        const deltedRecipe = await Recipe.findByIdAndDelete(recipeId);

        if (!deltedRecipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        res.status(200).json({ message: 'Recipe successfully deleted' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while deleting the recipe', error: error.message });
    }
});







module.exports = { homeRouter }