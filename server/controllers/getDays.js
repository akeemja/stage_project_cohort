const Cohorts = require ('../models/cohorts')

module.exports = async (req, res) => {
  try {
    const {program, language, campus} = req.body
    const days = await Cohorts.aggregate([
      {
        $match: {
          programs: program,
          language: language,
          campus: campus
        }
      },
      
      {
        $group: {
          _id: "$days"
        }
      },

      {
        $project: {
          _id: 0,
          days: "$_id"
        }
      }
    ])
      
    return res.json(days)
  } catch {
    return res.json('no date')
  }
}