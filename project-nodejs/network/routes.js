const express = require('express')
const message = require('../components/message/network')
const user = require('../components/user/network')

const routes = function(server){
    server.use('/message',message)
  
}

module.exports= routes


