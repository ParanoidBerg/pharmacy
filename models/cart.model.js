const mongoose = require('mongoose')

const cartSchema = mongoose.Schema ({
    user: {
        ref: 'User',
        type: mongoose.SchemaTypes.ObjectId
    },
    drugs: [{
        ref: 'Drug',
        type: mongoose.SchemaTypes.ObjectId
    }],
    totalSum: {
        type: Number,
        default: 0
    },
})

const Cart = mongoose.model('Cart', cartSchema)
module.exports = Cart
