const mongoose = require('mongoose');

const modelSchema = mongoose.Schema({
//    _id: mongoose.Schema.Types.ObjectId,
    modelImage: { type: String, required: true }
});

module.exports = mongoose.model('Model', modelSchema);