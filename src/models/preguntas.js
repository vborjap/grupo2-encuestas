import {Schema, model} from 'mongoose'

const PreguntaSchema = new Schema(
        {
         pregunta: {type: String, required: true},
         tipo_pregunta: {type: String, required: true},
         respuestas: {type: Object},
        },
        {
         timestamps: true,
         versionKey: false
        }
)

export default model('Pregunta', PreguntaSchema)