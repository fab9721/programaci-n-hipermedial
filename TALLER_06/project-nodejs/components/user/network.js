const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', function(req, res){
    const filterUsers = req.query.user || null
    controller.listUsers(filterUsers)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch( (error) =>{
            response.error(req,res, 'Unexpected error.',500, error)
        }) 
})

router.get('/:id', function(req, res){
    controller.getUser(req.params.id)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch( (error) =>{
            response.error(req,res, 'Unexpected error.', 500, error)
        }) 
})



router.post('/', function(req, res){
    controller.addUser(req.body.user, req.body.name, req.body.lastname) 
      .then( (data) => {
          response.success(req, res, data, 200)
      })
      .catch( (error) => {
          response.error(req, res, 'Datos Incorrectos', 500, error)
      })  
})

router.delete('/:id', function(req, res,){
    controller.deleteUser(req.params.id)
      .then((data) => {
          response.success(req, res, data, 200)
       })
      .catch((error) => {
          response.error(req, res,'Error Interno', 500, error)
       })
})

router.patch('/:id', function(req, res){
    controller.updateUser(req.params.id, req.body.name, req.body.lastname)
      .then((data) => {
          response.success(req, res, data, 200)
        })
      .catch((error) => {
          response.error(req,res,'Error Interno', 500, error)
        })
})

module.exports = router 