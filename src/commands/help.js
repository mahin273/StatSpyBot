async function handleHelp(msg) {
    const helpMessage = `
Here are all available commands:

📊 Personal Stats:
/stats - View your personal statistics
/activity - See your activity heatmap
/words - View your most used words
/emojis - See your most used emojis

👥 Group Stats (admin only):
/groupstats - View group statistics
/topusers - See most active users
/wordcloud - Generate group word cloud
/lurkers - List inactive members

📈 Reports:
/daily - Get daily report
/weekly - Get weekly report
/monthly - Get monthly report
/wrapped - Get your year in review

🏆 Achievements:
/achievements - View your earned badges
/leaderboard - See group rankings

Need help? Contact @YourUsername
`;

    return msg.reply.text(helpMessage);
}

module.exports = {
    handleHelp
}; 