import express from 'express'
const router = express.Router()

import {
    createInsegnantiController,
    createLinguaggioController, createStageController,
    createWorkshopController, getStageByIdController,
    getWorkshopByIdController
} from "../controller/user.controller.js";

router.post('/createWorkshop', createWorkshopController);

router.post('/linguaggio', createLinguaggioController);

router.get('/workshop/:stageId', getWorkshopByIdController);

router.get('/stage/:stageId', getStageByIdController);

router.post('/insegnanti', createInsegnantiController)

router.post('/createStage', createStageController)

console.log("user.route.js")

export { router }
