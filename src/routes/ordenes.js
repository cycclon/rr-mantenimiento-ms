const express = require("express")
const Orden = require('../models/orden')
const router = express.Router()

router.get('/', async (req, res)=>{
    res.status(200).json(await Orden.find())
})

module.exports = router

