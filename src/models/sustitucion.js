const mongoose = require('mongoose')
const Orden = require('./orden')

const Sustitucion = mongoose.Schema({
    motivo: {
        type: String,
        enum: ["Fin de vida útil", "Rotura irreparable", "Robo/Extravío", "Otro"],
        required: true
    },
    otroMotivo: {
        type: String,
        required: false,
        maxLength: 512

    }
}, { versionKey: false })

module.exports = Orden.discriminator('Sustitucion', Sustitucion)