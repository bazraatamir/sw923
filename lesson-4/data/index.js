const mongoose = require('mongoose');

let connectDB = ()=>{
    let connect = mongoose.connect("mongodb+srv://bazarragchaa:bazraa12@cluster0.gdwdrpv.mongodb.net/sw923",{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })

}

module.exports = connectDB