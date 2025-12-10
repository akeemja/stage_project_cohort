const Cohorts = require ('../models/cohorts')

module.exports = async (req, res) => {
    try {
        const {program, language, campus, day} = req.body
        const cohorts = await Cohorts.find({programs: program, language: language, campus: campus, days: day})
        return res.json(cohorts)
    } catch {
        return res.json('no cohort')
    }
}