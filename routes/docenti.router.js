import express from 'express'
const router = express.Router()
import { getDocenti, addDocenti, addMateria , getMateriaById, insertArgomenti, getArgomentiById} from '../controller/docenti.controller.js'

router.get('/get-docenti', getDocenti)
router.post('/add-docenti', addDocenti)
router.post('/add-materia', addMateria)
router.get('/get-materia/:id', getMateriaById)
router.post('/add-argomento/:id', insertArgomenti)
router.get('/get-argomenti/:id', getArgomentiById)

export{router}