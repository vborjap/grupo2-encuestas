import {Schema, model} from 'mongoose';

const Schemaencuesta=new Schema({

    nomEncuesta:{
        type: String,
        required: true

    },
    descripcion:{
        type: String,
        required: false
    },
    activa:{
        type: Boolean,
        default: true,
        required: false
    },
    secciones: [
        {
            type: Schema.Types.ObjectId,
            ref: "Secciones"
          
        }
    ]
},{
    timestamps: true
})

export default model('registroEncuesta',Schemaencuesta);

