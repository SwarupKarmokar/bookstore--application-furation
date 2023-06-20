const mongoose = require('mongoose');

const itemsShema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    item: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('items', itemsShema);