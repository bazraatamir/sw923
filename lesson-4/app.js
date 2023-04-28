const express = require("express");
const todoRouter = require('./route/todo');
const userRouter = require('./route/user')
const  connectDB = require("./data")
const app = express()

connectDB()
//body parser
app.use(express.json());

app.use('/todo',todoRouter);
app.use('/user',userRouter)


app.listen(3000,()=>{
    console.log("server listen 3000 port")
})
//mvc