const { User, Message } = require('../models');
const moment = require('moment');

async function handleStats(msg) {
    const userId = msg.from.id;
    const user = await User.findByPk(userId);
    
    if (!user) {
        return msg.reply.text('No statistics available yet. Start chatting to generate stats!');
    }

    // Get today's messages
    const todayMessages = await Message.count({
        where: {
            userId,
            timestamp: {
                [Op.gte]: moment().startOf('day').toDate()
            }
        }
    });

    // Get this week's messages
    const weekMessages = await Message.count({
        where: {
            userId,
            timestamp: {
                [Op.gte]: moment().startOf('week').toDate()
            }
        }
    });

    const statsMessage = `
📊 Your Statistics:

Messages Today: ${todayMessages}
Messages This Week: ${weekMessages}
Total Messages: ${user.totalMessages}
Member Since: ${moment(user.createdAt).format('MMMM D, YYYY')}
Last Active: ${moment(user.lastActive).fromNow()}

Use /activity to see your activity heatmap!
Use /words to see your most used words!
Use /wrapped for your year in review!
`;

    return msg.reply.text(statsMessage);
}

module.exports = {
    handleStats
}; 