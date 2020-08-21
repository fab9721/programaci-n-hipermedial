const express  = require('express')
const router = require('./network/routes')
const bodyParser = require('body-parser')
const response = require('./network/response')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
router(app)

app.use('/', express.static('public'))

app.listen(1000)
console.log('La Aplicación se encuentra activa en http://localhost:1000')