const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', function(req, res){
    const filterMessages = req.query.user || null
    controller.listMessages(filterMessages)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch( (error) =>{
            response.error(req,res, 'Unexpected error.',500, error)
        }) 
})

router.get('/:id', function(req, res){
    controller.getMessage(req.params.id)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch( (error) =>{
            response.error(req,res, 'Unexpected error.', 500, error)
        }) 
})

router.post('/', function(req, res){
    controller.addMessage(req.body.user, req.body.message) 
      .then( (data) => {
          response.success(req, res, data, 200)
      })
      .catch( (error) => {
          response.error(req, res, 'Datos Incorrectos', 500, error)
      })  
})

router.delete('/:id', function(req, res,){
    controller.deleteMessage(req.params.id)
      .then((data) => {
          response.success(req, res, data, 200)
       })
      .catch((error) => {
          response.error(req, res,'Error Interno', 500, error)
       })
})

router.patch('/:id', function(req, res){
    controller.updateMessage(req.params.id, req.body.message)
      .then((data) => {
          response.success(req, res, data, 200)
        })
      .catch((error) => {
          response.error(req,res,'Error Interno', 500, error)
        })
})

module.exports = router

