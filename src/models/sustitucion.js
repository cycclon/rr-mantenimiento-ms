const mongoose = require('mongoose')
const Orden = require('./orden')

const Sustitucion = mongoose.Schema({}, { versionKey: false })

module.exports = Orden.discriminator('Sustitucion', Sustitucion)