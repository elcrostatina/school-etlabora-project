import {
  getClass,
  addClass,
  deleteClass,
  deleteSubject,
  addStudent,
} from "../services/classesServices.js";
import { createSubject } from "../services/classesServices.js";

export const getClassController = async (req, res) => {
  const classe = await getClass(Number(req.params.classId));

  res.send({ classe });
};

export const addClassController = async (req, res) => {
  const { sezione, data_inizio, data_fine } = req.body; // Supponendo che i dati siano presenti nel corpo della richiesta
  try {
    await addClass(sezione, data_inizio, data_fine);
    res.send("Classe creata con successo");
  } catch (error) {
    console.error("Errore durante l'aggiunta della classe: ", error);
    res.send("Si è verificato un errore durante l'aggiunta della classe");
  }
};

export const deleteClassController = async (req, res) => {
  await deleteClass(Number(req.params.deleteClass));

  res.send({ message: "Classe eliminata" });
};

// Funzione per aggiungere una materia ad una classe
export const addSubject = async (req, res) => {
  const subject = await createSubject(
    Number(req.body.classId),
    Number(req.body.materiaId)
  );
  console.log("this is the problem:", subject);
  res.send({ message: "Materia aggiunta alla classe", subject });
};

export const deleteSubjectController = async (req, res) => {
  await deleteSubject(Number(req.params.classId));

  res.send({ message: "Materia eliminata" });
};

export const addStudentController = async (req, res) => {
  // @todo: check student limit constraint

  const student = await addStudent(
    req.body.studentId,
    req.body.name,
    req.body.surname
  );

  res.send({ student });
};
