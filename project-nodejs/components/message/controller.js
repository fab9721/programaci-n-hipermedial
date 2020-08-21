const use = require('./network')

function addMessage(user, message){
    return new Promise((resolve, reject) => {
        if(!user || !message){
            reject('Datos Inválidos.')
            return false
        }
        const fullMessage= {
            user: user,
            message: message,
            date: new Date()
        }
         return resolve(fullMessage)

    } )

}
module.exports = {
    addMessage,
}