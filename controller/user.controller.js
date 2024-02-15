import {
    createWorkshop,
    createLinguaggio,
    getStageById,
    getWorkshopById,
    createInsegnanti,
    createStage
} from '../services/user.service.js'

export const createWorkshopController = async (req, res) => {

    const rBody = req.body;

    const workshop = await createWorkshop(rBody.nome_workshop, rBody.data_inizio, rBody.data_fine, rBody.linguaggio_insegnato, rBody.insegnante_aziende, rBody.difficulty, rBody.classe);

    res.send({message: workshop});
}

export const createLinguaggioController = async (req, res) =>{
    const nomeLinguaggio = await createLinguaggio(req.body.linguaggio);

    res.send({nomeLinguaggio})
}

export const createInsegnantiController = async (req, res) => {
    const nomeInsegnante = await createInsegnanti(req.body.nome);

    res.send({nomeInsegnante})
}

export const createStageController = async (req, res) => {
    const rBody = req.body;
    const stage = await createStage(rBody.nome_azienda, rBody.descrizione_azienda, rBody.data_inizio, rBody.data_fine, rBody.retribuzione, rBody.linguaggio_insegnato, rBody.stagisti);

    res.send({message: stage})
}

export const getStageByIdController = async (req, res) => {
    const stage = await getStageById(req.params.stageId);

    res.send({stage});
}

export const getWorkshopByIdController = async (req, res) => {
    const workshop = await getWorkshopById(req.params.workshopId);

    res.send({workshop});
}
