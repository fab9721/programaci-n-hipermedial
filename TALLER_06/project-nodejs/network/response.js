exports.success = function(req, res, message, status){
    res.status(status||200).send({
        body: message,
        error : ''
    })
}

exports.error = function(req, res, message, status, details){
    console.error('[response error]'+ details)
    res.status(status||500).send({
        body: '',
        error : message
    })
}
