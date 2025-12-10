const Cohorts = require('../models/cohorts')

module.exports = async (req, res) => {
   try {
    const data = req.body

    if (!Array.isArray(data)) {
      return res.status(400).json({ message: 'Data must be an array' });
    }

    await Cohorts.insertMany(data)
    res.status(200).json({ message: 'Data uploaded successfully' });

  } catch (err) {
    console.error('Upload error:', err)
    res.status(500).json({ message: 'Server error', error: err.message });
  }
}

