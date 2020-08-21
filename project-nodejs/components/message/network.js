const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', function(req, res){
    response.success(req, res,'HOLA DESDE GET', 201)
})

router.post('/', function(req, res){

    controller.addMessage(req.body.user, req.body.message)
       .then((fullMessage) => {
           response.success(req,res, fullMessage, 201)
       })
       .catch((error) => {
           response.error(req,res, 'Información Valida', 500, error )
       })
})

router.delete('/', function(req, res){
    if(req.query.error == 'ok'){
        response.error(req,res, 'Error simulado', 501, 'Este es un error generado para verificar')
    } else{
        response.success(req, res,'Hola desde DELETE')
    }
    
})

module.exports = router

