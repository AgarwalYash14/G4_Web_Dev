// REQUIRE OR IMPORT ALL LIBRARIES
const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const userRouter = require('./routes/userRoutes')

// SET INSTANCES
const app = express()

// VARIABLE DECLARATION
const PORT = process.env.PORT || 4888

// USING MIDDLEWARE
app.use(express.json())
app.use(function (req, res, next) {
    console.log('THIS IS GLOBAL MIDDLEWARE')
    next()
})

// END-POINTS : USER
app.use('/api/user', userRouter)

// CONNECTING DATABASE
async function dbConnect() {
    await mongoose
        .connect(`${process.env.CONNECTION_URI}/${process.env.DATABASE_NAME}`)
        .then(() => {
            console.log('Database connected')
        })
        .catch((err) => {
            console.log('Database connection error:', err)
        })
}

dbConnect().then(() => {
    app.listen(PORT, () => {
        console.log('Server running on port : ', PORT)
    })
})
