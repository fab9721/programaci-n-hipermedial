const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mySchema = new Schema({
    user: {
        type : String,
        required: true,
    },
    
    name: String,
    lastname: String,
})

const model = mongoose.model('user', mySchema)
module.exports = model