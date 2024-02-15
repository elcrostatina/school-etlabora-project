import express from 'express'

const router = express.Router()

import { getClassController,
addClassController,
deleteClassController,
deleteSubjectController,
addStudentController
} from '../controller/classesController.js';
import { isAdmin } from '../middlewares/Classesmiddleware.js';
import { addSubject } from '../controller/classesController.js';

router.get('/classId/:classId', getClassController)
router.post('/class/:id', isAdmin, addClassController)
router.post('/add', addSubject)
router.post('/student', addStudentController)
router.delete('/:id/:deleteClass', isAdmin, deleteClassController)
router.delete('/delete/:classId', deleteSubjectController)

export { router }

