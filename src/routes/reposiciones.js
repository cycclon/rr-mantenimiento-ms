const express = require("express")
const Reposicion = require('../models/reposicion')
const router = express.Router()
const { validarAutorizacion, validarNivel } = require('../utilities/utilidades')

router.post('/registrar', validarAutorizacion, validarNivel(3), async (req, res)=>{
  const partesFecha = req.body.fechaEjecucion.split('/')

    try {
      const reposicion = new Reposicion({
        idRecurso: req.body.idRecurso,
        descripcion: req.body.descripcion,
        ejecutores: req.body.ejecutores,
        fechaEjecucion: new Date(+partesFecha[2], partesFecha[1]-1, +partesFecha[0]),
        estado: "Programada",
        cantidadRequerida: req.body.cantidadRequerida        
      })

      const reposicionRegistrada = await reposicion.save()
      return res.status(200).json(reposicionRegistrada)
    } catch (error) {
      return res.status(200).json({ mensaje: error.message })
    }
})

module.exports = router