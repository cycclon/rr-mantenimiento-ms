const mongoose = require('mongoose')
const Orden = require('./orden')

const Revision = mongoose.Schema({
    recomendacion: {
        type: String,
        enum: ["No definido", "No hacer nada", "Reparar", "Sustituir"],
        required: true
    },
    motivo: {
        type: String,
        maxLength: 512,
        required: false
    }
}, { versionKey: false })

module.exports = Orden.discriminator('Revision', Revision)