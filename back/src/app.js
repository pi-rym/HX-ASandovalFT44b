const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./routes/index')


const server = express()

server.use(morgan('dev'))
server.use(cors())
server.use(express.json())

/*
  request ->  morgan -> cors -> express.json -> ruta
    req         req     req         req         req
*/

//ruta
server.use('/rickandmorty', router)

module.exports = server

