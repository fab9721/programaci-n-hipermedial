const Model = require('./model')

function addMessage(message){
    const myMessage = new Model(message)
    myMessage.save()
}

function getMessages(filterUser){
    let filter = {}
    if (filterUser != null) {
       filter = {user : filterUser}
    }
    return Model.find(filter).exec();
}

function getMessage(messageId){
    return Model.findOne({
        _id: messageId,
     });
}

function deleteMessage(idMessage){
    return Model.deleteOne({
        _id: idMessage
    })
}

async function updateMessage(idMessage, message){
    const foundMessage = await getMessage(idMessage);
    foundMessage.message = message
    const newMessage = foundMessage.save()
    return newMessage
}

module.exports = {
    list: getMessages,
    get: getMessage,
    add: addMessage,
    delete: deleteMessage,
    update: updateMessage,
}