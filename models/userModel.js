const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        match: [
            /^[a-zA-Z\s]*$/,
            "Please enter a valid name"
        ],
    },
    email: {
        type: String,
        required: true,
        match: [
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            "Please enter a valid email"
        ],
    },
    password: {
        type: String,
        required: true,
        minlength: 8,   
        validate: [validatePassword, "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"]
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },

});

function validatePassword(password) {
    return (
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[!@#$%^&*(){}<>?/.,]/.test(password)
    )
}
module.exports = mongoose.model('User', userSchema);