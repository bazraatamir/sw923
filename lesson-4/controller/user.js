const userSchema =require('../model/user')
exports.getUser = async (req,res,next)=>{
    try {
        const data = await userSchema.find()
        res.status(200).json({
            success:true,
            data:data
        })
    } catch (error) {
        res.status(200).json({
            success:true,
            data:error
        })
    }
   
}
exports.login= async(req,res,next)=>{
    try {
        const{email,password} = req.body;
        if(!email || !password){
           return res.status(400).json({
                success:true,
                data:"aldaa"
            }) 
        }
        const user = await  userSchema.findOne({email:email}).select('+password')
        const enteredUser = await user.checkPassword(password)
        if(!enteredUser){
            return res.status(400).json({
                success:true,
                data:"email password shalgan uu!"
            }) 
        }
        res.status(200).json({
            success:true,
            data:"nevterlee"
        }) 
    } catch (error) {
        res.status(400).json({
            success:false,
            data:error
        }) 
    }
   
}
exports.postData=async (req,res,next)=>{
    try {
        const data = await userSchema.create(req.body)
        res.status(200).json({
            success:true,
            data:data
        }) 
    } catch (error) {
        res.status(400).json({
            success:false,
            data:error
        }) 
    }
   
}
exports.deleteData=async (req,res,next)=>{
    try {
        const data = await userSchema.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success:true,
            data:data
        }) 
    } catch (error) {
        res.status(400).json({
            success:true,
            data:error
        }) 
    }
   
}