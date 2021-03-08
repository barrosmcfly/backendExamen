var express = require('express')
const DatosController = require('../controllers/datoController')
var api = express.Router()

api.get('/', DatosController.getDatos)
api.get('/ultimoDato', DatosController.getUltimoDato)
api.get('/:id', DatosController.getDato)
api.post('/', DatosController.saveDato)
api.put('/:id', DatosController.updateDato)
api.delete('/:id', DatosController.deleteDato)
module.exports = api