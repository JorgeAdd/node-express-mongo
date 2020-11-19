const exrpress = require('express');
const User = require('../models/user.js');
const user = require('../models/user.js');
const md5 = require('md5');
const app = exrpress();

app.post('/login', function (req, res) {
  
    user.find({"mail":req.body.mail,"password":md5(req.body.password)},function (err, users) {
      if (err) res.status(500).send({ error: err });
      console.log(users);
      if(users.length > 0){
        res.status(200).send();
      }else{
        res.status(401).send(["Invalid email or password."]);
      }
    })
  })

module.exports = app;