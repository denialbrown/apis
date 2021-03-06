const express = require('express');
const fileupload = require('express-fileupload')
const app = express()
require("dotenv").config()
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));

app.use(fileupload())
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
app.use('/api', require("./routes/users"));
app.use('/api', require("./routes/address"));
app.use('/', require("./routes/admin"))
app.use('/signUp', require("./routes/admin"))
app.use('/signup', require("./routes/admin"))
app.use('/logIn', require("./routes/admin"))
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Express API for JSONPlaceholder',
        version: '1.0.0',
        description:
            'This is a REST API application made with Express. It retrieves data from JSONPlaceholder.',
        license: {
            name: 'Licensed Under MIT',
            url: 'https://spdx.org/licenses/MIT.html',
        },
        contact: {
            name: 'JSONPlaceholder',
            url: 'https://jsonplaceholder.typicode.com',
        },
    },
    servers: [
        {
            url: 'http://localhost:8000/api',
            description: 'Development server',
        },
    ],
};


const options = {
    swaggerDefinition,
    apis: ['./swaggerDocument/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);


app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const mongoose = require("mongoose");
var url = process.env.MONGODB_URL;
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function (err, db) {

    if (err) throw err;
    app.listen(8000, () => {

        console.log('Server is up on PORT 8000');

    })

});

