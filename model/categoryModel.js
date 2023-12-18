const mongoose = require('mongoose')

const categoryShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
   

})
const categorys = new mongoose.model('users', categoryShema)

module.exports = categorys