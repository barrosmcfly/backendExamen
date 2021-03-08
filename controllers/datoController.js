let Dato = require('../models/donacionSchema')

function saluda(req, res){
   let nombre = req.params.nombre
   res.status(200).send('Hola '+ nombre)
}
async function getDatos(req, res) {
    try{
        const datos = await Dato.find({}).exec()
        res.status(200).json(datos)
    }catch(error){
        res.status(500).json('error:'+error)
    }
 }
 async function getDato(req, res) {
    const datoId = req.params.id
    try{
        const datoEncontrado = await Dato.findById(datoId)
        res.status(200).json(datoEncontrado)
    }catch(error){
        res.status(500).json('error:'+error)
    }
 }
 async function getUltimoDato(req, res) {
    try{
        const datoEncontrado = await Dato.find({}).sort('-fecha').findOne()
        res.status(200).json(datoEncontrado)
    }catch(error){
        res.status(500).json('error:'+error)
    }
 }
 async function saveDato(req, res){
    const datosBody = req.body
    const dato = new Dato(datosBody)
    try{
        const datoGuardado = await dato.save()
        res.status(200).json('Informacion guardada correctamente')
    }catch(error){
        res.status(500).json('error:'+error)
    }
 
 }
 async function updateDato(req, res){
    const datoId = req.params.id
    const datosBody = req.body
    try{
        const datoActualizado = await Dato.findByIdAndUpdate(datoId, datosBody)
        res.status(200).json('Informacion actualizada correctamente')
    }catch(error){
        res.status(500).json('error:'+error)
    }
 }
 async function deleteDato(req, res){
    const datoId = req.params.id
    try{
        const datoBorrado = await Dato.findByIdAndRemove(datoId)
        res.status(200).json('Informacion borrada correctamente')
    }catch(error){
        res.status(500).json('error:'+error)
    }
 }
 module.exports = { getDatos, saluda, getDato, getUltimoDato, saveDato, updateDato, deleteDato }