const Users = require('../models/users')
const bcrypt = require('bcrypt')

module.exports = async (req, res) => {
    try {
        const {username, password}  = req.body
        const user = await Users.findOne({userName: username})

        if (user) {
            const match = await bcrypt.compare(password, user.password)
            if (match) {
                req.session.user = user
                return res.json({userName: user.userName, userType: user.userType})
            }
        }
        
        return res.json(null)
    }
    catch {
        return res.json(null)
    }
}