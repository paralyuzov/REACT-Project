const { Schema, model, Types } = require("mongoose");

const utensilsSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: String,
        required: true
    },
    package: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
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
    favorite: [{ type: Schema.Types.ObjectId, ref: 'Tea', default: [] }],
});

utensilsSchema.index(
    { title: 1 }, {
    collation: {
        locale: "en",
        strength: 2,
    },
}
);

const Utensils = model('Utensils', utensilsSchema)

module.exports = { Utensils }