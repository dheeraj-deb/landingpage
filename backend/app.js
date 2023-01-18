const express = require('express')
const cors = require('cors')

const { connect_db } = require('./config/Database')
const errorHandler = require('./util/ErrorHandler')
const messageRouter = require('./router/messageRouter')

const PORT = process.env.PORT || 4000

const app = express()

app.use(express.json())
app.use(cors())

connect_db((data) => {
    if (data) {
        console.log("db connected")
    }
})

app.use('/api', messageRouter)


app.listen(PORT, () => {
    console.log(`server is alive at ${PORT}`)
})

app.use(errorHandler)