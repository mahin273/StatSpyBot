const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const Message = sequelize.define('Message', {
    messageId: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    chatId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    timestamp: {
        type: DataTypes.DATE,
        allowNull: false
    },
    isGroup: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    reactions: {
        type: DataTypes.JSON,
        defaultValue: []
    }
});

module.exports = Message; 