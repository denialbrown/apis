const userSchema = require("../models/user")

async function getUserById(userId) {
    return await userSchema.findById(userId);
}


module.exports = {
    getUserById:getUserById,
};

