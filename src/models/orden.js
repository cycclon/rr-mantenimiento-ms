const mongoose = require('mongoose')

const esquemaOrden = mongoose.Schema({
    ejecutores: {
        type: Array,
        required: true
    },
    fechaInicio: {
        type: Date,
        required: false
    },    
    fechaEjecucion: {
        type: Date,
        required: false
    },
    fechaCancelacion: {
        type: Date,
        required: false
    },
    estado: {
        type: String,
        enum: ["Iniciada", "Programada", "Completada", "Cancelada"],
        required: true
    }

}, {    versionKey: false,
        discriminatorKey: "orden", 
        collection: "orden"
    })

module.exports = mongoose.model('Orden', esquemaOrden)