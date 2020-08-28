exports.success = function(req, res, user, status){
    res.status(status||200).send({
        body: user,
        error : ''
    })
}


exports.error = function(req, res, user, status, details){
    console.error('[response error]'+ details)
    res.status(status||500).send({
        body: '',
        error : user
    })
}
