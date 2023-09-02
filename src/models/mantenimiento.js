const mongoose = require('mongoose')
const Orden = require('./orden')

const TareaMantenimiento = mongoose.Schema({
    fecha: {
        type: Date,
        required: true
    },
    estado: {
        type: String,
        enum: ["Programada", "Completada", "Cancelada"],
        required: true
    },
    comentarios: {
        type: String,
        required: false,
        maxLength: 512
    },
    ejecutores: {
        type: Array,
        required: true
    }
}, { versionKey: false })

const Mantenimiento = mongoose.Schema({    
    tareas: [TareaMantenimiento]
}, { versionKey: false })

module.exports = Orden.discriminator('Mantenimiento', Mantenimiento)