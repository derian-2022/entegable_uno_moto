const {Sequelize} = require("sequelize")

const db = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "D18515933b",
    database: "motos",
    port: 5432,
    logging: false
})

module.exports = {db}