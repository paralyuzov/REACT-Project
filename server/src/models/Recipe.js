const { Schema, model } = require("mongoose");

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    info: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    preparing: {
        quantity: { type: String, required: true },
        amount: { type: String, required: true },
        time: { type: String, required: true },
        aditional: { type: String }
    }

});

recipeSchema.index(
    { title: 1 }, {
    collation: {
        locale: "en",
        strength: 2,
    },
}
);

const Recipe = model('Recipe', recipeSchema)

module.exports = { Recipe }