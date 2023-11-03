import { Sequelize } from "sequelize";

const db = new Sequelize('todo','kali','pahlawan',{
    host : 'localhost',
    dialect : 'mysql'
})

export default db;