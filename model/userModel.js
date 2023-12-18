const mongoose = require('mongoose')

const userShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    userName: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true,
        unique:true

    },
    password: {
        type: String,
        required: true
    }

})
const users = new mongoose.model('users', userShema)

module.exports = users