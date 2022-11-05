import {Schema, model} from 'mongoose';

const respuestaSchema = new Schema({

    idEncuesta: {
        type: Schema.Types.ObjectId,
        ref: "registroEncuesta" // Nombre del modelo
    },
    preguntas: [
        {
            idPregunta: {
                type: Schema.Types.ObjectId,
                ref: "Pregunta" 
            },
            respuestas: {
                type: [String],
                default: []
            },
            _id: false
        }
    ]
},{
        timestamps: true
});

export default model('Respuesta', respuestaSchema);