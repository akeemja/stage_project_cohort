const mongoose = require('mongoose')
const Schema = mongoose.Schema
var uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcrypt')

const UsersSchema = new Schema ({
    userName: { 
        type: String,
        required: true,
        unique: true 
    },

    firstName: {
        type: String,
        required: true 
    },

    lastName: {
        type: String,
        required: true 
    },

    userType: {
        type: String,
        required: true 
    },

    password: { 
        type: String,
        required: true 
    }
})

UsersSchema.plugin(uniqueValidator)

UsersSchema.pre('save', function(next) {
    const user = this

    if (!user.isModified('password')) return next()

    bcrypt.hash(user.password, 10, (error, hash) => {
        if (error) return next(error)
        user.password = hash
        next()
    })
})


const Users = mongoose.model('Users', UsersSchema)
module.exports = Users