const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CohortsSchema = new Schema ({
    programs: { 
        type: String,
        required: true 
    },

    language: {
        type: String,
        required: true 
    },

    campus: { 
        type: String,
        required: true 
    },

    theory: { 
        type: String,
        required: true 
    },

    stage: { 
        type: String,
        required: true 
    },

    days: { 
        type: String,
        required: true 
    },

    schedule: { 
        type: String,
        required: true 
    },

    hrwk: { 
        type: String,
        required: true 
    },

    startDate: { 
        type: String,
        required: true 
    },

    integration: { 
        type: String
    }
})

const Cohorts = mongoose.model('Cohorts', CohortsSchema)
module.exports = Cohorts