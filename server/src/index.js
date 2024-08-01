
const express = require('express');
const { configDatabase } = require('./config/configDatabase');
const { configRoutes } = require('./config/configRoutes');
const {session} = require('./middlewares/session');
const { cors } = require('./middlewares/cors');



async function start() {
    const app = express();
    await configDatabase();
    app.use(cors());
    app.use(session());
    app.use(express.json());
    configRoutes(app);
    
    app.listen(3030, ()=> console.log('Server is listening on port 3030...'))
}

start();
