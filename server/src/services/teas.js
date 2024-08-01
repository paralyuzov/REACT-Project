const { Tea } = require("../models/Data");


async function create(body) {
    return await Tea.create(body);
}


module.exports = {create}