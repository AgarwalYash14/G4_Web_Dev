const express = require('express')
const { registerUser, loginUser } = require('../controllers/userController')
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router()

const app = express()

app.use(function (req, res, next) {
    console.log('THIS IS ROUTER LEVEL MIDDLEWARE')
    next()
})

router.post('/register', authMiddleware, registerUser)
router.post('/login', authMiddleware, loginUser)

module.exports = router
