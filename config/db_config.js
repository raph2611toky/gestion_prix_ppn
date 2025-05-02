// config.db_config.js

module.exports = {
    HOST: 'localhost',
    USER: 'raph',
    PASSWORD: 'hpar',
    DB: 'gestion_de_ppn', 
    dialect: 'mariadb', 

    pool: {
        max:5,
        min:0,
        acquire:3000,
        idle:2000
    },
    logging: false,
}