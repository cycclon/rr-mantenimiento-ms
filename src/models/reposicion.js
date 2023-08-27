const mongoose = require('mongoose')
const Orden = require('./orden')

const Reposicion = mongoose.Schema({}, { versionKey: false })

module.exports = Orden.discriminator('Reposicion', Reposicion)