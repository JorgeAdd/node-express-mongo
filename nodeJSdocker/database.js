const mongoose = require('mongoose');
const md5 = require('md5');

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

//Create new user
var addUser = function(){
    var obUser = new User({
        name:"Jazmín Sánchez",
        mail: "jazmin@mail.com",
        password: md5("Hola123")
    })
    obUser.save(function(err,fluffy){
        if(err) return console.log(err);
        console.log('User added')
    })
}