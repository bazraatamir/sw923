const mongoose  = require('mongoose');
const bcryto = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = Schema({
    userName:{
        type:String,
        required:[true,"хэрэглэгчийн нэрийг оруулна уу"]
    },
    email:{
        type:String,
        required:[true,"э-майл уруулна уу"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"нууц үгээ орууна уу"],
        select:false
    }
})

userSchema.pre("save",async function(){
    const salt =  await bcryto.genSalt(10);
    this.password = await bcryto.hash(this.password,salt);
})
userSchema.methods.checkPassword = async function(userPassword){
    console.log(userPassword)
        const ok = await bcryto.compare(userPassword,this.password)
        return ok
}
module.exports= mongoose.model('user',userSchema)