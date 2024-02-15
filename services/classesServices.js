import { ClasseMaterie, Classes, Students } from "../models/dbClasse.js"

export const getClass = async (id) => Classes.findOne({ where: { id } })

export const addClass = async (newsezione, newdata_inizio, newdata_fine) => {
    await Classes.create({sezione : newsezione, data_inizio : newdata_inizio, data_fine  : newdata_fine})
    }


export const deleteClass = async (id) => {
    Classes.destroy({ where: {id}})
}
export const createSubject = async (classeId, materiaId) => {
    await ClasseMaterie.create({id: classeId, materiaId})}

export const deleteSubject = async (classeId) => {
    await ClasseMaterie.destroy({ where: {id: classeId}})
}

export const addStudent = async (studentId, name, surname) => {
    try {
        const targetClass = await Classes.findOne({
          where: { id },
          include: Students,
        });

        if (!targetClass) {
          throw new Error('Classe non trovata.');
        }

        if (targetClass.Students.length < 20) {
          // Aggiungi lo studente alla classe esistente
          const newStudent = await Students.create({ studentId, name, surname  });
          await targetClass.addStudent(newStudent);
          return true; // Successo
        } else {
          return false; // La classe ha raggiunto il limite
        }
      } catch (error) {
        console.error(error.message);
        throw new Error('Errore durante l\'aggiunta dello studente alla classe.');
      }
    }
