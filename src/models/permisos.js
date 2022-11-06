import { Schema, model } from 'mongoose'

const permisoSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true
        }
    },
    {
        timestamps: false,
        versionKey: false
    }
)

export default model('Permiso', permisoSchema);
