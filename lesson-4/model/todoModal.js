const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = Schema({
    todo:{
        type:String,
        required:true
    }
    
})

module.exports = mongoose.model('todo',todoSchema)