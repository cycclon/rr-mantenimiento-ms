require('dotenv').config()
const express = require('express')
const app = express()
const OrdenesRouter = require('./routes/ordenes')
const SustitucionesRouter = require('./routes/sustituciones')
const ReposicionesRouter = require('./routes/reposiciones')
const MantenimientosRouter = require('./routes/mantenimientos')
const RevisionesRouter = require('./routes/revisiones')
const ReparacionesRouter = require('./routes/reparaciones')

const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;

db.on('error', (error)=> console.log(error));
db.once('open',()=>console.log('Conectado a base de datos de Mantenimiento'));

app.use(express.json());
app.use(cors());

app.use('/ordenes', OrdenesRouter)
app.use('/sustituciones', SustitucionesRouter)
app.use('/reposiciones', ReposicionesRouter)
app.use('/mantenimientos', MantenimientosRouter)
app.use('/revisiones', RevisionesRouter)
app.use('/reparaciones', ReparacionesRouter)

app.listen(3004, ()=> console.log('RR: microservicio de Mantenimiento iniciado correctamente en puerto 3004.'))