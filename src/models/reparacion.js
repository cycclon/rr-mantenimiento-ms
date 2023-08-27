const mongoose = require('mongoose')
const Orden = require('./orden')

const Reparacion = mongoose.Schema({}, { versionKey: false })

module.exports = Orden.discriminator('Reparacion', Reparacion)