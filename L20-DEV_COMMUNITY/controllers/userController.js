const User = require('../models/userModel')

const registerUser = async (req, res) => {
    const { firstName, lastName, emailId, password } = req.body

    // VALIDATIONS
    if (!firstName || !emailId || !password) {
        res.status(400).send({ message: 'Please add all mandatory fields' })
    }

    // CHECK THE USER ALREADY EXISTED IN DB OR NOT
    const userExists = await User.findOne({ emailId })
    if (userExists) {
        res.status(400).json('ALREADY EXISTS: ', { userExists })
    }

    // CRETE USER IN YOUR DATABASE

    const newUser = await User.create({
        firstName,
        lastName,
        emailId,
        password,
    })

    await newUser.save()

    res.status(201).send({ message: 'USER CREATED' })
}

// const loginUser = () => {}

module.exports = { registerUser }
