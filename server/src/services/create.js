const { Recipe } = require("../models/Recipe");
const { Story } = require("../models/Story");
const { Utensils } = require("../models/Utensils");


async function createUtensilsModel(body) {
    return await Utensils.create(body);
}

async function createRecipeModel(body) {
    return await Recipe.create(body);
}

async function createStoryModel(body) {
    return await Story.create(body);
}

module.exports = { createUtensilsModel, createRecipeModel, createStoryModel }