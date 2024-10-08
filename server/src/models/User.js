const { Schema, Types, model, default: mongoose } = require("mongoose");


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: [4, 'Username must be at least 4 characters long']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: [10, 'Email adress must be at least 10 characters long']
    },
    password: {
        type: String,
        required: [true, 'Password is']
    },
    tel: {
        type: String,
        required: true,
        unique: true
    },
    favorite: { type: [Schema.Types.ObjectId], ref: 'Teas', default: [] },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }


});

userSchema.index({ email: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
})

userSchema.index({ username: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
})

const User = model("User", userSchema);

module.exports = { User };