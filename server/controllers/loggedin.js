module.exports = async (req, res) => {
    if (req.session.user) {
        const user = req.session.user
        return res.json({userName: user.userName, userType: user.userType})
    } else {
        return res.json('No user')
    }
}