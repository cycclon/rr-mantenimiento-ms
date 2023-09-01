require('dotenv').config()
const express = require('express')
const app = express()
const OrdenesRouter = require('./routes/ordenes')
const SustitucionesRouter = require('./routes/sustituciones')

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

app.listen(3004, ()=> console.log('RR: microservicio de Mantenimiento iniciado correctamente en puerto 3004.'))