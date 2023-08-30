const mongoose = require('mongoose')
const Orden = require('./orden')

const TareaMantenimiento = mongoose.Schema({
    fecha: {
        type: Date,
        required: true
    },
    estado: {
        type: String,
        enum: ["Programada", "Completada", "Cancelada"] 
    }
}, { versionKey: false })

const Mantenimiento = mongoose.Schema({
    unidad: {
        type: String,
        enum: ["Días", "Semanas", "Meses", "Años"],
        required: true
    },
    intervalo: {
        type: Number,
        required: true
    },
    tareas: [TareaMantenimiento],
    desde: {
        type: Date,
        required: true
    },
    hasta: {
        type: Date,
        required: true
    }
}, { versionKey: false })

module.exports = Orden.discriminator('Mantenimiento', Mantenimiento)