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
    secciones:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

export default model('registroEncuesta',Schemaencuesta);
