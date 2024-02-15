import { DataTypes, Sequelize } from 'sequelize'

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: Number(process.env.DB_PORT),
});

export const User = sequelize.define("User", {},{tableName: 'User'});

export  const Students = sequelize.define('Student', {
    studentId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    },
    surname: {
        type: DataTypes.STRING
    }
});


export const Account = sequelize.define("Account", {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cognome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    isInsegnante: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    isStudente: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
},{tableName: 'Account'});


export const Guest = sequelize.define("Guest", {
    alias: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{tableName: 'Guest'});


export const AccountInsegnante = sequelize.define("AccountInsegnante", {
},{tableName: 'AccountInsegnante'});


export const AccountStudente = sequelize.define("AccountStudente", {
},{tableName: 'AccountStudente'});

export const Classes = sequelize.define('Classes', {
    sezione: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_inizio: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    data_fine: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
}, {tableName: 'Classes'})

export const Materia = sequelize.define('Materia', {
    something: {
        type: DataTypes.STRING
    }
}, {tableName: 'Materia'})

export const ClasseMaterie = sequelize.define("ClasseMaterie")

export const docente = sequelize.define('docenti', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cognome: {
        type: DataTypes.STRING,
        allowNull: false
    },
})
export const argomenti = sequelize.define('argomenti', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
})

export const Workshop = sequelize.define('Workshop',{
    nome_workshop: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_inizio: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    data_fine: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    linguaggio_insegnato: { //many to many
        type: DataTypes.INTEGER,
        allowNull: false
    },
    insegnante_aziende: {//one to one
        type: DataTypes.INTEGER,
        allowNull: false
    },
    difficulty: {
        type: DataTypes.STRING,
        allowNull: false
    },
    classe: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export const Stage = sequelize.define('Stage', {
    nome_azienda: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descrizione_azienda: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_inizio: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    data_fine: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    retribuzione: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    linguaggio_insegnato: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stagisti: { //una sola persona per azienda
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export const Insegnanti = sequelize.define('Insegnanti', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export const Linguaggi = sequelize.define('Linguaggi',{
    linguaggio: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

//ASSOCIATIVA WORKSHOP - LINGUAGGI
export const LinguaggiWorkshop = sequelize.define('LinguaggiWorkshop', {
    Workshop: {
        type: DataTypes.INTEGER,
        references: {
            model: Workshop,
            key: 'id'
        }
    },
    Linguaggi: {
        type: DataTypes.INTEGER,
        references: {
            model: Linguaggi,
            key: 'id'
        }
    }
})

export const LinguaggiStage = sequelize.define('LinguaggiStage', {
    Stage: {
        type: DataTypes.INTEGER,
        references: {
            model: Stage,
            key: 'id'
        }
    },
    Linguaggi: {
        type: DataTypes.INTEGER,
        references: {
            model: Linguaggi,
            key: 'id'
        }
    }
})


Classes.belongsToMany(Materia, { through: 'ClasseMaterie' });
Materia.belongsToMany(Classes, { through: 'ClasseMaterie' });

docente.hasOne(Materia)
Materia.belongsTo(docente)

docente.hasMany(argomenti)
argomenti.belongsTo(docente)

User.hasOne(Account);
Account.belongsTo(User);
User.hasOne(Guest);
Guest.belongsTo(User);

Account.hasOne(AccountInsegnante);
AccountInsegnante.belongsTo(Account)
Account.hasOne(AccountStudente);
AccountStudente.belongsTo(Account)

Classes.hasMany(AccountStudente)
AccountStudente.belongsTo(Classes)

Classes.hasMany(AccountInsegnante)
AccountInsegnante.belongsTo(Classes)
Materia.hasOne(AccountInsegnante)
AccountInsegnante.belongsTo(Materia)

Classes.hasMany(Students);
Students.belongsTo(Classes);

Workshop.belongsToMany(Linguaggi, {through: 'LinguaggiWorkshop'});
Linguaggi.belongsToMany(Workshop, {through: 'LinguaggiWorkshop'});
Linguaggi.belongsToMany(Stage, {through: 'LinguaggiStage'});
Stage.belongsToMany(Linguaggi, {through: 'LinguaggiStage'});

Workshop.hasOne(Insegnanti);
Insegnanti.belongsTo(Workshop);



export const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        await User.sync();
        await Account.sync();
        await Guest.sync();
        await docente.sync()
        await Materia.sync();
        await Classes.sync();
        await ClasseMaterie.sync();
        await Students.sync();

        await AccountInsegnante.sync();
        await AccountStudente.sync();

        await Linguaggi.sync();
        await Workshop.sync();
        await Insegnanti.sync();
        await Stage.sync();
        await LinguaggiWorkshop.sync();
        await LinguaggiStage.sync();

        await argomenti.sync()
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}



