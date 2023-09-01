const mongoose = require('mongoose')

const esquemaOrden = mongoose.Schema({
  idRecurso: {
    type: String,
    required: true,
    minlength: 24,
    maxlength: 24
  },
  descripcion: {
      type: String,
      required: true
  },
  ejecutores: {
      type: Array,
      required: true
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
      enum: ["Programada", "Completada", "Cancelada"],
      required: true
  }

}, {    versionKey: false,
      discriminatorKey: "orden", 
      collection: "orden"
  })

module.exports = mongoose.model('Orden', esquemaOrden)