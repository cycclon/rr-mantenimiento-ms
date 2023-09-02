const express = require("express")
const Sustitucion = require('../models/sustitucion')
const router = express.Router()
const { validarAutorizacion, validarNivel } = require('../utilities/utilidades')

router.post('/registrar', validarAutorizacion, validarNivel(3), async (req, res)=>{
  const partesFecha = req.body.fechaEjecucion.split('/')

    try {
      const sustitucion = new Sustitucion({
        idRecurso: req.body.idRecurso,
        descripcion: req.body.descripcion,
        ejecutores: req.body.ejecutores,
        fechaEjecucion: new Date(+partesFecha[2], partesFecha[1]-1, +partesFecha[0]),
        estado: "Programada",
        motivo: req.body.motivo,
        otroMotivo: req.body.otroMotivo
      })

      const sustitucionRegistrada = await sustitucion.save()
      return res.status(200).json(sustitucionRegistrada)
    } catch (error) {
      return res.status(200).json({ mensaje: error.message })
    }
})

module.exports = router