// import {
//     changeUserFirstName,
//     createUser,
//     deleteUser,
//     getUserById,
//     getUsersByFirstName
// } from '../services/user/user.service.js'

// /**
//  * Il controller è responsabile di gestire le richieste HTTP e di restituire una risposta.
//  */
// export const createUserController = async (req, res) => {
//     const user = await createUser(req.body.firstName, req.body.lastName)

//     res.send({ user })
// }

// export const getUserByIdController = async (req, res) => {
//     const user = await getUserById(Number(req.params.userId))

//     res.send({ user })
// }

// export const getUsersByFirstNameController = async (req, res) =>
//     res.send({ users: await getUsersByFirstName(req.params.firstName) })

// export const changeUserFirstNameController = async (req, res) => {
//     await changeUserFirstName(Number(req.params.userId), req.body.newFirstName)

//     res.send({ message: 'First name changed' })
// }

// export const deleteUserController = async (req, res) => {
//     await deleteUser(Number(req.params.userId))

//     res.send({ message: 'User deleted' })
// }

import { createAccount, createUser, createAccountByType } from "../services/account/account.service.js"

export const createUserController = async (req,res) =>{
    const newUser = await createUser()

    res.send({newUser})
}

export const createUserAccountController = async (req, res) => {

    const user = await createAccountByType({
        isAdmin: req.body.isAdmin,
        isInsegnante: req.body.isInsegnante,
        isStudente: req.body.isStudente,
        nome: req.body.nome,
        cognome: req.body.cognome,
        email: req.body.email,
        password: req.body.password,
        UserId: req.body.UserId
    })

    res.send({
        message: 'Account created successfully',
        user
    })
}
