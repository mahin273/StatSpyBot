const { Message, User } = require('../models');
const moment = require('moment');
const { Op } = require('sequelize');

async function handleGroupStats(msg) {
    // Check if it's a group chat
    if (msg.chat.type === 'private') {
        return msg.reply.text('This command can only be used in groups!');
    }

    // Check if user is admin
    const chatMember = await msg.chat.getChatMember(msg.from.id);
    if (!['creator', 'administrator'].includes(chatMember.status)) {
        return msg.reply.text('This command is only available to group administrators.');
    }

    const chatId = msg.chat.id;
    
    // Get today's stats
    const todayMessages = await Message.count({
        where: {
            chatId,
            timestamp: {
                [Op.gte]: moment().startOf('day').toDate()
            }
        }
    });

    // Get top users
    const topUsers = await Message.findAll({
        where: {
            chatId,
            timestamp: {
                [Op.gte]: moment().subtract(7, 'days').toDate()
            }
        },
        attributes: ['userId', [sequelize.fn('COUNT', '*'), 'messageCount']],
        group: ['userId'],
        order: [[sequelize.fn('COUNT', '*'), 'DESC']],
        limit: 5,
        include: [{
            model: User,
            attributes: ['username', 'firstName']
        }]
    });

    const statsMessage = `
📊 Group Statistics for ${msg.chat.title}

Messages Today: ${todayMessages}

👥 Top Active Members (Last 7 Days):
${topUsers.map((user, index) => {
    const name = user.User.username || user.User.firstName || 'Unknown';
    return `${index + 1}. ${name}: ${user.messageCount} messages`;
}).join('\n')}

Use /wordcloud to generate group word cloud!
Use /lurkers to see inactive members!
`;

    return msg.reply.text(statsMessage);
}

module.exports = {
    handleGroupStats
}; 