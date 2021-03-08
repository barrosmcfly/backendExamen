let User = require('../models/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
async function getUsers(req, res) {
    try{
        const usuarios = await User.find({}).exec()
        res.status(200).json(usuarios)
    }catch(error){
        res.status(500).json('error:'+error)
    }
 }
 async function getUser(req, res) {
    const userId = req.params.id
    try{
        const usuarioEncontrado = await User.findById(userId)
        res.status(200).json(usuarioEncontrado)
    }catch(error){
        res.status(500).json('error:'+error)
    }
 }
 async function updateUser(req, res){
    const userId = req.params.id
    const userBody = req.body
    try{
        const usuarioActualizado = await User.findByIdAndUpdate(userId, userBody)
        res.status(200).json('Informacion actualizada correctamente')
    }catch(error){
        res.status(500).json('error:'+error)
    }
 }
 async function deleteUser(req, res){
    const userId = req.params.id
    try{
        const usuarioBorrado = await User.findByIdAndRemove(userId)
        res.status(200).json('Informacion borrada correctamente')
    }catch(error){
        res.status(500).json('error:'+error)
    }
 }
 
 module.exports = { getUsers, getUser, updateUser, deleteUser}