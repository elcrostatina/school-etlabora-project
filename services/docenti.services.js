import { docente as docenti, Materia, argomenti } from "../models/dbClasse.js"

export const get = async() => await docenti.findAll()

export const add = async(nome, cognome) => await docenti.create({nome, cognome})

export const addMat = async(nome) => await Materia.create({nome})

export const getMateriaId = async(id) => await Materia.findOne({where: {id}})

export const insertArgomenti = async(nome, date) => await argomenti.create({nome, date})

export const getById = async(id) => await docenti.findOne({where: {id}})

export const addArgomento = async(nome, date) => await argomenti.create({nome, date})

export const getArgomentibyId = async(id) => await argomenti.findAll({where: {id}})
