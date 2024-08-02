const { User } = require("../models/User");
const bcrypt = require('bcrypt');

async function register(username, email, password, tel) {
    const existingEmail = await User.findOne({ email }).collation({ locale: 'en', strength: 2 })
    const existingUsername = await User.findOne({ username }).collation({ locale: 'en', strength: 2 })

    if (existingEmail) {
        throw new Error('This email already exist!')
    }

    if (existingUsername) {
        throw new Error('This username already exist!')
    }

    const user = new User({
        username,
        email,
        password: await bcrypt.hash(password, 10),
        tel

    })

    await user.save();

    return user;
}


async function login(email, password) {
    const user = await User.findOne({ email }).collation({ locale: 'en', strength: 2 })
    if (!user) {
        throw new Error("Incorect username or password");
    }

    const match = await bcrypt.compare(password, user.password);
    if (match == false) {
        throw new Error('Incorect username or password');
    }

    return user
}

async function update(id, username, email, tel) {
    const user = await User.findById(id);

    if (!user) {
        throw new Error('User not found');
    }

    const existingEmail = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    if (existingEmail && existingEmail._id.toString() !== id) {
        throw new Error('This email already exists!');
    }

    const existingUsername = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });
    if (existingUsername && existingUsername._id.toString() !== id) {
        throw new Error('This username already exists!');
    }

    if (username) user.username = username;
    if (email) user.email = email;
    if (tel) user.tel = tel;

    await user.save();

    return user;
}



module.exports = { register, login, update }