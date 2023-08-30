const mongoose = require('mongoose')
const Orden = require('./orden')

const Reparacion = mongoose.Schema({
    detalleTrabajo: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 1024        
    },
    costo: {
        type: Number,
        required: true
    }
}, { versionKey: false })

module.exports = Orden.discriminator('Reparacion', Reparacion)