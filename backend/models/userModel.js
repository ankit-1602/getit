import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
const Schema=mongoose.Schema

const userSchema=Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        required: true,
        default: false
    }
},{
    timestamps:true
})

userSchema.methods.matchPassword = async function(enteredPassord){
    return await bcrypt.compare(enteredPassord,this.password)
}

const User=mongoose.model('User',userSchema);
export default User;