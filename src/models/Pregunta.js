const mongoose = require('mongoose');
const {Schema} = mongoose;

const PreguntaSchema = new Schema({
    title: {type: String, required: true},
    tipoR: {type: String, required: true},
    respuestas: { type: [String], default: [] }

});

module.exports = mongoose.model('Pregunta', PreguntaSchema)
//export default Pregunta;





