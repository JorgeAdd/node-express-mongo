const exrpress = require('express');
const user = require('../models/user.js');
const md5 = require('md5');
const app = exrpress();

/**
 * @swagger
 * /login:
 *  post:
 *    description: API to log into the app.
 *    parameters:
 *    - name: mail
 *      description: user email
 *      required: true
 *      type: string
 *    - name: password
 *      description: user password
 *      required: true
 *      type: string
 *    responses:
 *      200:
 *        description: Successful login.
 *      401:
 *        description: Failed to log in.
 */
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

  //Create new user
// var add = function(){
//     var obUser = new User({
//         name:"Jazmín Sánchez",
//         mail: "jazmin@mail.com",
//         password: md5("Hola123")
//     })
//     obUser.save(function(err,fluffy){
//         if(err) return console.log(err);
//         console.log('User added')
//     })
// }

module.exports = app;