const Model = require('./model')


function addUser(user){
    const myUser = new Model(user)
    myUser.save()
}

function getUsers(filterUser){
    let filter = {}
    if (filterUser != null) {
       filter = {user : filterUser}
    }
    return Model.find(filter).exec();
}

function getUser(userId){
    return Model.findOne({
        _id: userId,
     });
}

function deleteUser(idUser){
    return Model.deleteOne({
        _id: idUser
    })
}

async function updateUser(idUser, name, lastname){
    const foundUser = await getUser(idUser);
    foundUser.name = name
    foundUser.lastname = lastname
    const newUser = foundUser.save()
    return newUser
}

module.exports = {
    list: getUsers,
    get: getUser,
    add: addUser,
    delete: deleteUser,
    update: updateUser,
}