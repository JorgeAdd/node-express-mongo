const mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    name:String,
    mail:String,
    password:String
})

module.exports = mongoose.model('User', UserSchema);