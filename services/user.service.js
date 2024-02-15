import { Workshop, Stage, Linguaggi, LinguaggiStage, LinguaggiWorkshop, Insegnanti } from "../models/dbClasse.js";


export const createWorkshop = async(nome_workshop, data_inizio, data_fine, linguaggio_insegnato, insegnante_aziende, difficulty, classe) => {
    return Workshop.create({nome_workshop, data_inizio, data_fine, linguaggio_insegnato, insegnante_aziende, difficulty, classe})
}

export const createLinguaggio = async (linguaggio) => Linguaggi.create({linguaggio})

export const createInsegnanti = async(nome) => Insegnanti.create({nome});

export const createStage = async(nome_azienda, descrizione_azienda, data_inizio, data_fine, retribuzione, linguaggio_insegnato, stagisti) => Stage.create({nome_azienda, descrizione_azienda, data_inizio, data_fine, retribuzione, linguaggio_insegnato, stagisti})

export const getWorkshopById = async (id) => Workshop.findOne({where: {id}})

export const getStageById = async (id) => Stage.findOne({where: {id}})
