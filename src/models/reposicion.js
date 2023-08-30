const mongoose = require('mongoose')
const Orden = require('./orden')

const Reposicion = mongoose.Schema({
    cantidadRequerida: {
        type: Number,
        required: true
    },
    cantidadAgregada: {
        type: Number,
        required: true
    },
}, { versionKey: false })

module.exports = Orden.discriminator('Reposicion', Reposicion)