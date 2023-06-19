const mongoose = require('mongoose');

const itemsShema = mongoose.Schema({
    item: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('items', itemsShema);