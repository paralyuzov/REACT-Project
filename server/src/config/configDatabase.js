const mongoose = require('mongoose');

async function configDatabase() {
    const CONNECT_STRING = 'mongodb://localhost:27017/project';

    await mongoose.connect(CONNECT_STRING);

    console.log('Database connected!');
}


module.exports = {configDatabase};