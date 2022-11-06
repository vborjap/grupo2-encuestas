import { Schema, model } from 'mongoose'

const roleUserSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }, 
        role: {
            type: Schema.Types.ObjectId,
            ref: "Role"
        }
    },
    {
        timestamps: false,
        versionKey: false
    }
)

export default model('RoleUser', roleUserSchema);
