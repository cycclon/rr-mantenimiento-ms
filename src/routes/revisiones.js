const express = require("express")
const Revision = require('../models/revision')
const router = express.Router()
const { validarAutorizacion, validarNivel } = require('../utilities/utilidades')

router.post('/registrar', validarAutorizacion, validarNivel(3), async (req, res)=>{
  const partesFecha = req.body.fechaEjecucion.split('/')

    try {
      const revision = new Revision({
        idRecurso: req.body.idRecurso,
        descripcion: req.body.descripcion,
        ejecutores: req.body.ejecutores,
        fechaEjecucion: new Date(+partesFecha[2], partesFecha[1]-1, +partesFecha[0]),
        estado: "Programada",
        recomendacion: req.body.recomendacion,
        motivo: req.body.motivo       
      })

      const revisionRegistrada = await revision.save()
      return res.status(200).json(revisionRegistrada)
    } catch (error) {
      return res.status(200).json({ mensaje: error.message })
    }
})

module.exports = router