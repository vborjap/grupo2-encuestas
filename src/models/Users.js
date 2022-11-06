const {Schema, model} = require('mongoose');

const UsersSchema = new Schema({
    name: {type: String, required: true},
    fechaNac: {type: Date, required: true},
    nacionalidad: {type: String, required: true},
    email: {type: String, required: true},
    userName:{type: String, required: true},
    password: {type: String, required: true},
    tipoUsuario:{type: String, required: true}
},{
    timestamps: true,
    versionKey:false
});

module.exports = model('Users', UsersSchema);