require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const { sequelize } = require('./models');
const { setupCommands } = require('./commands');

// Initialize bot
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

// Database connection and bot initialization
async function initialize() {
    try {
        await sequelize.authenticate();
        console.log('Database connection established successfully.');
        
        // Sync database models
        await sequelize.sync();
        console.log('Database models synchronized.');

        // Setup bot commands
        setupCommands(bot);

        console.log('Bot is running...');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }
}

// Handle errors
bot.on('polling_error', (error) => {
    console.error('Polling error:', error);
});

// Start the bot
initialize(); 