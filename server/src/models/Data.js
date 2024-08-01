const { Schema, model, Types } = require("mongoose");


const teaSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    type: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true
    },
    package: {
        type: String,
        required: true,
    },
    weight: {
        type: String,
        required: true,
    },
    serving: {
        type: String,
        required: true,
    },
    ingredients: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    life: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    bougthList: {
        type: [Types.ObjectId],
        ref: "User",
        default: [],
    },
    favorite: {
        type: [Types.ObjectId],
        ref: 'User',
        default: []
    },
});

teaSchema.index(
    { title: 1 }, {
    collation: {
        locale: "en",
        strength: 2,
    },
}
);

const Tea = model('Teas', teaSchema)

module.exports = { Tea }