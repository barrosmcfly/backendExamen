var express = require('express')
const UserController = require('../controllers/userController')

var api = express.Router()

api.get('/', UserController.getUsers)
api.get('/:id', UserController.getUser )
api.put('/:id', UserController.updateUser)
api.delete('/:id', UserController.deleteUser)

module.exports = api