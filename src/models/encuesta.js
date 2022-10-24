const {Schema,model}=require('mongoose');

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
        type: Number,
        required: true
    }
},{
    timestamps: true
})

module.exports=model('registroEncuesta',Schemaencuesta);