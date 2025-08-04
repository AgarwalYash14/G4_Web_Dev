const express = require('express')
const { registerUser } = require('../controllers/userController')

const router = express.Router()

const app = express()

app.use(function (req, res, next) {
    console.log('THIS IS ROUTER LEVEL MIDDLEWARE')
    next()
})

router.post('/register', registerUser)

module.exports = router
