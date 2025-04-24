async function handleStart(msg) {
    const chatId = msg.chat.id;
    const welcomeMessage = `
Welcome to StatSpyBot! 🎉

I'll help you track and analyze your Telegram activity. Here are some things I can do:

📊 Personal Analytics:
- Track your message count
- Show your most active hours
- Display your most used words/emojis
- Generate activity heatmaps

👥 Group Analytics (for admins):
- Show top active members
- Generate word clouds
- Track daily message counts
- Detect spam and anomalies

Use /help to see all available commands!
`;

    return msg.reply.text(welcomeMessage);
}

module.exports = {
    handleStart
}; 