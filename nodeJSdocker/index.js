const express = require('express');
const database = require('./database')
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const md5 = require('md5');
const bodyParser = require('body-parser')

const app = express();

database.initializeMongo();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Library API",
      version: "1.0.0"
    }
  },
  apis: ['./routes/login.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));


app.use(bodyParser.urlencoded({ extended: false }))
app.post('/login', bodyParser.json())
app.use(require('./routes/login'))
app.use(require('./routes/courses'))

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})