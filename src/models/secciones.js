import {Schema, model} from 'mongoose'

const seccionesSchema = new Schema(
        {
         nombre: {type: String, required: true},
         descripcion: {type: String, required: true},
         preguntas: [{type: Schema.Types.ObjectId, required: true, ref: 'Pregunta'}],
        },
        {
         timestamps: true,
         versionKey: false
        }
)

export default model('Secciones', seccionesSchema);
