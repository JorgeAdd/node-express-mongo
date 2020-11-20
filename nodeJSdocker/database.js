const mongoose = require('mongoose');
const md5 = require('md5');
const Course = require('./models/courses.js');
const DATABASE_CONECTION = 'mongodb://mongo/Challenge1';

exports.initializeMongo = function () {
    mongoose.connect(DATABASE_CONECTION);

    console.log('Trying to connect to ' + DATABASE_CONECTION);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error: We might not be as connected as I thought'));
    db.once('open', function() {
        console.log('Succesfully connected!');
    });
}

//Create new course
var addCourse = function(){
    var obUser = new Course({
        nameCourse:"Biología",
        link: "https://www.udemy.com/course/introduccion-a-la-biologia/",
        description:"En el siguiente curso, daremos temas relacionados con la Biología. En la primer sección iniciaremos la clase hablando de la Célula, ya sea sus características principales; diferencias entre Procariotas y Eucariotas."
    })
    obUser.save(function(err,fluffy){
        if(err) return console.log(err);
        console.log('Course added')
    })
}