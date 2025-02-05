import { DataTypes } from '@sequelize/core';

export default (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        lastLoginTime: {
            type: DataTypes.DATE
        },
        status: {
            type: DataTypes.ENUM('active', 'blocked'),
            defaultValue: 'active'
        },
        registrationTime: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW
        }
    }, {
        sequelize,
        modelName: 'user',
        indexes: [
            {
                unique: true,
                fields: ['email', 'name', 'lastLoginTime', 'status']
            }
        ]
    });

    User.beforeFind((options) => {
        options.where = {
            ...options.where,
            status: 'active'
        };
    });

    sequelize.sync().then(() => {
        console.log('User table created successfully!');
    }).catch((error) => {
        console.error('Unable to create table: ', error);
    });

    return User;
};