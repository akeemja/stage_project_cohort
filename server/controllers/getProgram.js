const Cohorts = require ('../models/cohorts')

module.exports = async (req, res) => {
    const programs = await Cohorts.aggregate([
    {
      $group: {
        _id: "$programs"
      }
    },
    
    {
      $project: {
        _id: 0,
        program: "$_id"
      }
    }
  ])
  return res.json(programs)
}