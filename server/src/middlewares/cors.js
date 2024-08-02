function cors() {
    return function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Authorization');

        
        if (req.method === 'OPTIONS') {
            res.sendStatus(204);
        } else {
            next();
        }
    };
}

module.exports = { cors }