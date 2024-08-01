const { verifyToken } = require("../services/jwt");

function session() {
    return function (req, res, next) {
        const token = req.headers['X-Authorization'];
        if (token) {
            try {
                const sessionData = verifyToken(token);
                req.user = {
                    email: sessionData.email,
                    _id: sessionData.id
                };

                res.user.hasUser = true;
            } catch (error) {
                res.status(401).json({ code: 401, message: 'Invalid or expired token' })
                return;
            }
        }

        next();
    }
}

module.exports = { session }