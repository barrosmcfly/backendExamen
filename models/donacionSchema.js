const mongoose = require('mongoose')
const Schema = mongoose.Schema

let donacionSchema = Schema (
   {
       _id: {type: Schema.ObjectId, auto: true},
       titulo: String,
       descripcion: String,
       fecha: {type: Schema.Types.Date, default: Date.now }
   },
   {
       timestamps: true,
       versionKey: false
   }
)
module.exports = mongoose.model('Dato', donacionSchema)