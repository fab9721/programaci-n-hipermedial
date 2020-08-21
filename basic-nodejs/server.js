const express  = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const response = require('./network/response')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
app.use(router)

router.get('/message', function(req, res){
 response.success(req, res,'HOLA DESDE GET', 201)
})

router.post('/message', function(req, res){
    if(req.query.error == 'ok'){

        response.error(req,res, 'Error simulado')
    } else{
        response.success(req, res,'Hola desde POST',201)
    }
})

router.delete('/message', function(req, res){
    if(req.query.error == 'ok'){
        response.error(req,res, 'Error simulado', 501, 'Este es un error generado para verificar')
    } else{
        response.success(req, res,'Hola desde DELETE')
    }
    
})



app.use('/mensajeria', express.static('public'))

app.listen(4000)
console.log('La Aplicación se encuentra activa en http://localhost:4000')




