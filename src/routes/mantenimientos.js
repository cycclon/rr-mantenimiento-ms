const express = require("express")
const Mantenimiento = require('../models/mantenimiento')
const router = express.Router()
const { validarAutorizacion, validarNivel } = require('../utilities/utilidades')

router.post('/registrar', validarAutorizacion, validarNivel(2), async (req, res)=>{
  const partesFecha = req.body.fechaEjecucion.split('/')

    try {
        const mantenimiento = new Mantenimiento({
            idRecurso: req.body.idRecurso,
            descripcion: req.body.descripcion,
            ejecutores: req.body.ejecutores,
            fechaEjecucion: new Date(+partesFecha[2], partesFecha[1]-1, +partesFecha[0]),
            estado: "Programada",        
            tareas: crearTareas(
                req.body.fechaEjecucion, 
                req.body.hasta, 
                req.body.unidad, 
                req.body.intervalo,
                req.body.ejecutores)
        })

        const mantenimientoRegistrado = await mantenimiento.save()
        return res.status(200).json(mantenimientoRegistrado)
    } catch (error) {
        return res.status(200).json({ mensaje: error.message })
    }
})

function crearTareas(desde, hasta, unidad, intervalo, ejecutores){
    const partesFecha = desde.split('/')
    const partesFechaHasta = hasta.split('/')
    const tareas = []

    let fechaTarea = new Date(+partesFecha[2], partesFecha[1]-1, +partesFecha[0])

    while(fechaTarea <= new Date(+partesFechaHasta[2], partesFechaHasta[1]-1, +partesFechaHasta[0])) {
        //console.log(fechaTarea)
        const tareaMantenimiento = {
            fecha: new Date(fechaTarea.getFullYear(), fechaTarea.getMonth(), fechaTarea.getDate()),
            ejecutores: ejecutores,
            estado: "Programada"
        }
        tareas.push(tareaMantenimiento)

        
        switch(unidad){
            case "Días":
                fechaTarea.setDate(fechaTarea.getDate() + intervalo)
                break;
            case "Semanas":
                fechaTarea.setDate(fechaTarea.getDate() + (intervalo*7))
                break;
            case "Meses":
                fechaTarea.setMonth(fechaTarea.getMonth()+intervalo)
                break;
            case "Años":
                fechaTarea.setFullYear(fechaTarea.getFullYear()+intervalo)
                console.log(fechaTarea)
                break;
            default:
                return res.status(200).json({ mensaje: "Unidad inválida en intervalo de mantenimiento"})                
        }
        
    }
    return tareas
}

module.exports = router