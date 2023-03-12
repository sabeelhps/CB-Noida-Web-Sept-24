const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        index:true
    },
    passwordHash: {
        type: String,
        trim: true,
        required: true
    }
});


module.exports = mongoose.model('User', userSchema);