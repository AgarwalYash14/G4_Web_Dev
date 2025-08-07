const express = require('express')
const {
    getProfile,
    createProfile,
} = require('../controllers/profileController')

const router = express.Router()

router.post('/', getProfile)
router.post('/', createProfile)

module.exports = router
