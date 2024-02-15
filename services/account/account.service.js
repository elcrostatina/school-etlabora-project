// import { User } from "../../db/db.js";

// /**
//  * Il service è responsabile di gestire la logica di business e di interagire con il database attraverso l'orm.
//  */
// export const createUser = async (firstName, lastName) => User.create({ firstName, lastName })

// export const getUserById = async (id) => User.findOne({ where: { id } })

// export const getUsersByFirstName = async (firstName) => User.findAll({ where: { firstName } })

// export const changeUserFirstName = async (id, newFirstName) => {
//     await User.update({ firstName: newFirstName }, {
//         where: { id }
//     });

//     // Questo è un altro modo per fare l'update di un record nel database
//     // const user = await User.findOne({ where: { id } });
//     // user.firstName = newFirstName;
//     // await user.save();
// }

// export const deleteUser = async (id) => User.destroy({ where: { id } });

import {Classes, Guest, User, Account, AccountInsegnante, AccountStudente} from '../../models/dbClasse.js'

export const createUser = () => User.create()

export const createGuest = () => Guest.create()

export const createAccount = async (userObj) => {
    await Account.create(userObj)
}

export const createAccountByType = async (userObj) =>{
    // const newAccount = Account.create(userId)
    if(userObj.isAdmin === true){

        return  createAccount(userObj)// account con admin settato a true e i restanti 2 a false
    }
    else if(userObj.isInsegnante === true){
        await createAccount(userObj)//account con insegnante a true e il resto a false
        return  AccountInsegnante.create({AccountId: userObj.UserId})//account dell'insegnante relativo all'account passato
    }else{
        await createAccount(userObj)//account con insegnante a true e il resto a false
        return AccountStudente.create({AccountId: userObj.UserId})
    }
}


