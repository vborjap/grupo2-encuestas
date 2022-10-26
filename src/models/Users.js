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
    timestamps: true
})

UsersSchema.methods.encrypPassword = async password =>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

UsersSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

module.exports = model('Users', UsersSchema);