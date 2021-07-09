const mongoose = require('mongoose');

const User = mongoose.Schema({
    nome: { type: String, required: true },
    pontos: { type: String, required: true }
}, {
    timestamps: true,
})

module.exports = mongoose.model('user', User)