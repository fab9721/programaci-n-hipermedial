const db = require ('mongoose')
const uri = require('./server')
db.set('useFindAndModify', false);
function connect(uri){
    db.connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
       .then((db)=> {
           return console.log('[db] Conexión exitosa.');
       })
       .catch((error) =>{
        console.error('[db]',error)
       })  
    
}

module.exports = connect