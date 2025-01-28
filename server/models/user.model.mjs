export default (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        lastLoginTime: {
            type: Sequelize.DATE
        },
        status: {
            type: Sequelize.ENUM('active', 'blocked'),
            defaultValue: 'active'
        },
        registrationTime: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
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
        console.error('Unable to create table : ', error);
    });

    return User;
};