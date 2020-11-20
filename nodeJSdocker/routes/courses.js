const exrpress = require('express');
const course = require('../models/courses.js');
const md5 = require('md5');
const app = exrpress();

app.post('/course',function(req,res) {
    course.find(function(err,courses){
        if (err) res.status(500).send({ error: err });
        if(courses.length > 0){
            res.status(200).send([courses]);
        }else{
            res.status(200).send(["There was no courses found"]);
        }
    })
})
module.exports = app;