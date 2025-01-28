import { Sequelize } from "sequelize";
import { dbConfig } from "../config/db.config.mjs";
import user from "./user.model.mjs";

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    // dbConfig.PASSWORD,
    '',
    {
        host: dbConfig.HOST,
        // dialect: "mysql",
        dialect: dbConfig.dialect,
        // port: dbConfig.port
    });

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const db = {
    Sequelize,
    sequelize,
    users: user(sequelize, Sequelize)
};

export { db };