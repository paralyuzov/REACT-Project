const { Schema, model } = require("mongoose");

const storySchema = new Schema({
    story: {
        title: { type: String, unique: true, required: true }, 
        image: { type: String, required: true }, 

        aditional: {
            head: {
                image: { type: String, required: true },
                area: { type: String, required: true }, 
                info: { type: String, required: true },
            },
            enjoy: {
                info: { type: String, required: true } 
            },
            prepare: {
                info: { type: String, required: true } 
            }
        }
    }
});


const Story = model('Story', storySchema)

module.exports = { Story }