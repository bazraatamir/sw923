const todoSchema = require('../model/todoModal')
exports.getTodo = async (req,res,next)=>{
    try {
        const data = await todoSchema.find()
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



exports.postData=async (req,res,next)=>{
    try {
        const data = await todoSchema.create(req.body)
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
exports.deleteData=async (req,res,next)=>{
    try {
        const data = await todoSchema.findByIdAndDelete(req.params.id)
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
//mvc
