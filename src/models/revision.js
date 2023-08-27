const mongoose = require('mongoose')
const Orden = require('./orden')

const Revision = mongoose.Schema({}, { versionKey: false })

module.exports = Orden.discriminator('Revision', Revision)