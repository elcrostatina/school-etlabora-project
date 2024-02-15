import express from 'express'
const router = express.Router()

// import{}
// route.get('/Insegnante/:insegnanteId', getInsegnante)
import { createUserAccountController,createUserController } from '../controller/account.controller.js'

router.post('/CreateAccount', createUserAccountController)
router.post('/CreateUser', createUserController)

export { router }
