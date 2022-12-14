const express = require("express")
const mongoose = require("mongoose")
const config = require('config')
const authRouter = require("./routers/authRouter.js")
const serverRouter = require("./routers/serverRouter.js")
const corsMiddleware = require('./middleware/cors.middleware.js')

const app = express()
const PORT = config.get("serverPort")

app.use(corsMiddleware);
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/server', serverRouter)

const start = async () => {
    try{
        await mongoose.connect(config.get("dbUrl"), {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        app.listen(PORT, () => {
            console.log('Server started on port ', PORT)
        })

    } catch (e){
        console.log(e)
    }
}

start()