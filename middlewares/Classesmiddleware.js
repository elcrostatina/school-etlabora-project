// Middleware per verificare se un account è admin
import { Account } from "../models/dbClasse.js";

export const isAdmin = async (req, res, next) => {
    try {
        const accountId = req.params.id;
        const account = await Account.findOne({ where: {id: accountId}} );
        console.log("this account in middleware", account)
        if (!account) {
            return res.status(404).send('Account non trovato');
        }
        if (account.isAdmin === true) {
            next();
        } else {
            res.status(403).send('Accesso negato');
        }
    } catch (error) {

        console.error("Errore durante il controllo dell'amministratore:", error);
        res.status(500).send('Si è verificato un errore durante la verifica dell\'amministratore');
    }
};

