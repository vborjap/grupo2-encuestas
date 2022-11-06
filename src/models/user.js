import { Schema, model } from 'mongoose'
import bcrypt from "bcrypt";
const SALT_WORK_FACTOR = 10;

const userSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        nickname: {
            type: String,
            required: true
        },
        email: {
            type:String,
            required:true
        },
        password: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: false,
            default: ""
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

userSchema.pre('save',  function (next) {
    let user = this;
    if(user.password === undefined) {
        return next();
    }

    bcrypt.genSalt(SALT_WORK_FACTOR, (error, salt) => {
        if(error) {
            return next(error);
        }
        bcrypt.hash(user.password, salt, (error, hash) => {
            if(error) {
                return next(error);
            }
            user.password = hash;
            next();
        });
    });

});

userSchema.method("comparePasswords", async function (password)  {
    try{
        return await bcrypt.compare(password, this.password);
    } catch(err){
        throw new Error(err.message);
    }
});

export default model('User', userSchema);
