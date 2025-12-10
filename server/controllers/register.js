const Users = require('../models/users')

module.exports = async (req, res) => {
    const user = req.body
    const isNotUnique = await Users.findOne({userName: user.username})

    if (isNotUnique) {
       return res.json({message: 'username already taken'})
    }

    const newUser = new Users ({
        userName: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        userType: 'admission counselor',
        password: user.password
    })
    await newUser.save()

    req.session.user = newUser
    return res.json({message: 'User Added', userName: newUser.userName, userType: newUser.userType})
}