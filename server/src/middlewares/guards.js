const { default: mongoose } = require("mongoose");

function isUser() {
    return function(req,res,next) {
        if(!req.user) {
            res.redirect('/login');
        } else {
            next()
        }
    }
}

function isGuest() {
    return function(req,res,next) {
        if(req.user) {
            res.redirect('/')
        } else {
            next();
        }
    }
}

function validateObjectId() {
    return (req,res,next) => {
        if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'Invalid ID' });
        } else {
            next();
        }
    }
}

module.exports = {isUser,isGuest,validateObjectId}