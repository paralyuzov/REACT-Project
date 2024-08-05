
const { checkOut } = require('../controllers/checkout');
const { createTea } = require('../controllers/craeteTea');
const { createUtensils } = require('../controllers/craeteUtensils');
const { createRecipe } = require('../controllers/createRecipe');
const { createStory } = require('../controllers/createStory');
const { favorites } = require('../controllers/favorites');
const { homeRouter } = require('../controllers/home');
const { search } = require('../controllers/search');
const { userRouter } = require('../controllers/user');
const { verifyRouter } = require('../controllers/verify');

function configRoutes(app) {
    app.use('/api/auth/verify', verifyRouter)
    app.use('/api/collection' , homeRouter)
    app.use('/users', userRouter);
    app.use('/data', createTea);
    app.use('/data', createUtensils);
    app.use('/data', createRecipe)
    app.use('/data',createStory)
    app.use('/api/checkout', checkOut);
    app.use('/api/favorites', favorites);
    app.use('/api', search)
}

module.exports = { configRoutes };