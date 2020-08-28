const express  = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const response = require('../network/response')


var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
app.use(router)

router.get('/user', function(req, res){
 response.success(req, res,'[HOLA]', 201)
})

router.post('/user', function(req, res){
    if(req.query.error == 'ok'){

        response.error(req,res, 'Error simulado')
    } else{
        response.success(req, res,'FABIAN OCHOA',201)
    }
})

router.delete('/user', function(req, res){
    if(req.query.error == 'ok'){
        response.error(req,res, 'Error simulado', 501, 'Este es un error generado para verificar')
    } else{
        response.success(req, res,'Eliminando')
    }
    
})



app.use('/aplicacion', express.static('public'))

app.listen(5300)
console.log('La Aplicación se encuentra activa en http://localhost:5300')