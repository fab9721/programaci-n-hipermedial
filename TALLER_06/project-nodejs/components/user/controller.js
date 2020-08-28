const use = require('./network')
const storage = require('./storage')

function addUser(user, name, lastname){
    return new Promise((resolve, reject) => {
        if(!user || !name || !lastname){
            console.error('[MessageController] No hay usuario, nombre o apellido')
            return reject('No hay usuario o apellido.')
            
        }
        const fullUser= {
            user: user,
            name: name,
            lastname: lastname,
        }
        storage.add(fullUser)
        return resolve(fullUser)

    } )

}


function listUsers(filterUser){
    return new Promise(async (resolve, reject) =>{
        try {
            const result = await storage.list(filterUser);
            resolve(result)
        } catch(error) {
            reject (error)
        }
    })
}

function getUser(UserId){
    return new Promise(async (resolve, reject) =>{
        try {
            const result = await storage.get(UserId);
            resolve(result)
        } catch(error) {
            reject (error)
        }
    })
}

function deleteUser(idUser){
    return new Promise (async (resolve, reject) => {
        if(!idUser){
            return reject('No ha ingresado el id.')
        }
        try {
            const result = await storage.delete(idUser)
            return resolve(result)
        } catch (error) {
            reject(error)
        }
    })   
}

function updateUser(idUser, name, lastname){
    return new Promise(async(resolve, reject) => {
        if(!idUser || !name || !lastname ){
            return reject('No hay ingresado el id o message')
        }
        try {
            const result=  await storage.update(idUser, name, lastname)
            return resolve(result)
        } catch (error) {
            reject(error);
        }
  })
}





module.exports ={
    addUser,
    listUsers,
    getUser,
    deleteUser,
    updateUser,
    
}
