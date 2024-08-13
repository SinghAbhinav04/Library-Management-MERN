const express = require("express")
const cors = require("cors")
const connectMongoDB = require('./connection')
const router = require('./router/user')
const bookRouter = require('./router/books');

const PORT = 8001;
const app = express();
connectMongoDB("mongodb://localhost:27017/libraryManagement")
.then(()=>{console.log("Mongo DB connected!")})
.catch((err)=>{console.log(err)})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/",router)
app.use("/addbook",bookRouter)
app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})