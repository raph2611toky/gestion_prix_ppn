module.exports = (sequelize, DataTypes) => {
    const Employe = sequelize.define("Employe", {
        id_employe: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cin: {
            type: DataTypes.STRING,
            autoIncrement: false,
        },
        nom: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        region: {
            type: DataTypes.ENUM([
                'Diana',
                'Sava',
                'Itasy',
                'Analamanga',
                'Vakinankaratra',
                'Bongolava',
                'Sofia',
                'Boeny',
                'Betsiboka',
                'Melaky',
                'Alaotra-Mangoro',
                'Atsinanana',
                'Analanjirofo',
                'Amoron\'i Mania',
                'Haute Matsiatra',
                'Vatovavy-Fitovinany',
                'Atsimo-Atsinanana',
                'Ihorombe',
                'Menabe',
                'Atsimo-Andrefana',
                'Androy',
                'Anosy'
            ]),
            allowNull: false,
        },
        fonction: {
            type: DataTypes.ENUM(['MODERATEUR', 'ADMINISTRATEUR']),
            allowNull: false,
        },
    });

    Employe.associate = (models) => {
        Employe.hasMany(models.Rapport, { foreignKey: 'employe_id', as: 'rapports' });
    };

    return Employe;
};