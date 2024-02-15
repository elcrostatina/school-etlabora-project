import { get, add, addMat, getById, addArgomento, getArgomentibyId } from "../services/docenti.services.js"


export const getDocenti = async(req, res) => {
    const docenti = await get()

    res.send({docenti})
}
export const getDocentiById = (id) => {
    const docenti = getById(id)
    return docenti
}

export const addDocenti = async(req, res) => {
    const nome = req.body.nome
    const cognome = req.body.cognome
    const docenti =  await add(nome, cognome)

    res.send( {docenti} )
}
export const addMateria = async(req, res) => {
    const nome = req.body.nome
    const materia =  await addMat(nome)

    res.send( {materia} )
}

export const getArgomentiDate = async(req, res) => {
    const date = await getDate()

    res.send({date})
}

export const getMateriaById = async(req, res) => {
    const id = req.params.id
    const materia = await getMateriaId(id)

    res.send({materia})
}

export const getArgomentiById = async(req, res) => {
    const date = req.params.date
    const id = req.params.id
    const argomenti = await getArgomentibyId(id)

    res.send({argomenti})
}

export const insertArgomenti = async(req, res) => {
    const id = req.params.id
    if(!(await getDocentiById(id) == null)){
        const nome = req.body.nome
        const date = new Date()
        const argomenti = await addArgomento(nome, date)
        res.send(argomenti)
    }else{
        res.status(400).send('Docente non trovato')
    }  
}