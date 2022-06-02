const mongoose = require('mongoose')

const drugSchema = mongoose.Schema ({
    name: String,
    price: Number,
    needRecipe: Boolean,
    category: {
        ref: 'Category',
        type: mongoose.SchemaTypes.ObjectId
    }
})

const Drug = mongoose.model('Drug', drugSchema)
module.exports = Drug