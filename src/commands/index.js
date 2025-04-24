const { handleStart } = require('./start');
const { handleStats } = require('./stats');
const { handleHelp } = require('./help');
const { handleGroupStats } = require('./groupStats');

function setupCommands(bot) {
    // Basic commands
    bot.onText(/\/start/, handleStart);
    bot.onText(/\/help/, handleHelp);
    bot.onText(/\/stats/, handleStats);
    bot.onText(/\/groupstats/, handleGroupStats);

    // Message handler for analytics
    bot.on('message', async (msg) => {
        try {
            // Store message data
            await storeMessage(msg);
            
            // Update user stats
            await updateUserStats(msg);
            
            // Check for achievements
            await checkAchievements(msg);
        } catch (error) {
            console.error('Error processing message:', error);
        }
    });
}

async function storeMessage(msg) {
    const { Message } = require('../models');
    await Message.create({
        messageId: msg.message_id,
        chatId: msg.chat.id,
        userId: msg.from.id,
        text: msg.text,
        timestamp: new Date(),
        isGroup: msg.chat.type !== 'private',
        reactions: msg.reactions || []
    });
}

async function updateUserStats(msg) {
    const { User } = require('../models');
    const [user] = await User.findOrCreate({
        where: { userId: msg.from.id },
        defaults: {
            username: msg.from.username,
            firstName: msg.from.first_name,
            lastName: msg.from.last_name,
            lastActive: new Date()
        }
    });

    await user.increment('totalMessages');
    await user.update({ lastActive: new Date() });
}

async function checkAchievements(msg) {
    // Implementation for achievement checking
    // This will be expanded in the achievements service
}

module.exports = {
    setupCommands
}; 