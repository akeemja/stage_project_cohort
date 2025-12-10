module.exports = (req, res) => {
    try {
        req.session.destroy()
    } finally {
        return res.json('logged out')
    }
}