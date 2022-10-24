import {Schema, model} from 'mongoose'

const seccionesSchema = new Schema(
        {
         nombre: String,
         descripcion: String,
         preguntas: [{}],
        },
        {
         timestamps: true,
         versionKey: false
        }
)

export default model('secciones', seccionesSchema)