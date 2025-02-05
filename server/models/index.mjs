import user from "./user.model.mjs";
import { Sequelize } from '@sequelize/core';
import { MySqlDialect } from '@sequelize/mysql';
import { config } from 'dotenv';

config();

const sequelize = new Sequelize({
    dialect: MySqlDialect,
    database: 'user_manager_db',
    user: 'root',
    password: '',
    host: 'mysql',
    port: 3306,
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