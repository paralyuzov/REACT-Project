const jwt = require('jsonwebtoken');


const secret = "sdg13gxzxfq24"

function createToken(userData) {
    const payload = {
        username: userData.username,
        email: userData.email,
        tel: userData.tel,
        id: userData._id,
        role: userData.role

    }

    const token = jwt.sign(payload, secret, {
        expiresIn: '1d'
    })

    return token;
}

function verifyToken(token) {
    const data = jwt.verify(token, secret);
    return data;
}

module.exports = {
    createToken, verifyToken
}