const express = require("express")
const Reparacion = require('../models/reparacion')
const router = express.Router()

router.post('/registrar', async (req, res)=>{
  const partesFecha = req.body.fechaEjecucion.split('/')

    try {
      const reparacion = new Reparacion({
        idRecurso: req.body.idRecurso,
        descripcion: req.body.descripcion,
        ejecutores: req.body.ejecutores,
        fechaEjecucion: new Date(+partesFecha[2], partesFecha[1]-1, +partesFecha[0]),
        estado: "Programada",
        detalleTrabajo: req.body.detalleTrabajo,
        costo: req.body.costo    
      })

      const reparacionRegistrada = await reparacion.save()
      return res.status(200).json(reparacionRegistrada)
    } catch (error) {
      return res.status(200).json({ mensaje: error.message })
    }
})

module.exports = router