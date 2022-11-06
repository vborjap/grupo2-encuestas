import { Schema, model } from 'mongoose'

const roleSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        permisos: [
            {
                type: Schema.Types.ObjectId,
                ref: "Permiso",
            }
        ]
    },
    {
        timestamps: false,
        versionKey: false
    }
)

export default model('Role', roleSchema);
