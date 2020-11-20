const mongoose = require('mongoose');

var CourseSchema = mongoose.Schema({
    nameCourse:String,
    link:String,
    description:String
})

module.exports = mongoose.model('Course', CourseSchema);