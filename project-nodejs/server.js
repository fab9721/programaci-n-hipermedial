const express  = require('express')
const router = require('./network/routes')
const bodyParser = require('body-parser')
const response = require('./network/response')
const db = require('./db')

db('mongodb+srv://ups:ups2020@cluster0.mjz9u.gcp.mongodb.net/ups?retryWrites=true&w=majority')
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
router(app)

app.use('/', express.static('public'))

app.listen(9000)
console.log('La Aplicación se encuentra activa en http://localhost:9000')