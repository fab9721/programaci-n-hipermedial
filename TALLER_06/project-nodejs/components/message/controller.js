const use = require('./network')
const storage = require('./storage')

function listMessages(filterUser){
    return new Promise(async (resolve, reject) =>{
        try {
            const result = await storage.list(filterUser);
            resolve(result)
        } catch(error) {
            reject (error)
        }
    })
}

function getMessage(messageId){
    return new Promise(async (resolve, reject) =>{
        try {
            const result = await storage.get(messageId);
            resolve(result)
        } catch(error) {
            reject (error)
        }
    })
}

function addMessage(user, message){
    return new Promise((resolve, reject) => {
        if(!user || !message){
            console.error('MessageController')
            return reject('No hay usuario o mensaje.')
            
        }
        const fullMessage= {
            user: user,
            message: message,
            date: new Date()
        }
        storage.add(fullMessage)
        return resolve(fullMessage)

    } )

}

function deleteMessage(idMessage){
    return new Promise (async (resolve, reject) => {
        if(!idMessage){
            return reject('No ha ingresado el id.')
        }
        try {
            const result = await storage.delete(idMessage)
            return resolve(result)
        } catch (error) {
            reject(error)
        }
    })   
}

function updateMessage(idMessage, message){
    return new Promise(async(resolve, reject) => {
        if(!idMessage || !message ){
            return reject('No hay ingresado el id o message')
        }
        try {
            const result=  await storage.update(idMessage, message)
            return resolve(result)
        } catch (error) {
            reject(error);
        }
  })
}

module.exports = {
    listMessages,
    getMessage,
    addMessage,    
    updateMessage,
    deleteMessage,
}