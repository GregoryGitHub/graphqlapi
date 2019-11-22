'use strict'
/**
 * Arquivo responsável por usar os providers e resolver as 
 * queries definidas no schema.
 * @autor Jose Henrique Gregório <henriquegreg45@gmail.com>
 */
const providers = require('./providers')


let id = 0
const resolvers = {
    user({ id }){
        return providers.user.find(item=> item.id === Number(id))
    },
    users(){
        return providers.users
    },
    createUser({name, email, age}){
       const user ={ id: id++,
        name,
        email,
        age
       }
       providers.users.push(user)
       return user;
    }
}

module.exports = resolvers;