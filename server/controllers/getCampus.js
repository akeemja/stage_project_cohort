const Cohorts = require ('../models/cohorts')

module.exports = async (req, res) => {
  try {
    const {program, language} = req.body
    const campuses = await Cohorts.aggregate([
      {
        $match: {
          programs: program,
          language: language
        }
      },

      {
        $group: {
          _id: "$campus"
        }
      },
      
      {
        $project: {
          _id: 0,
          campus: "$_id"
        }
      }
    ])

    return res.json(campuses)
  } catch {
    return res.json('no campus')
  }
}