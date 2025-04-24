# StatSpyBot

A Telegram bot that provides detailed analytics on your Telegram activity, similar to "Spotify Wrapped" but for your Telegram life.

## Author
Created by Mahin

## Features

### For Individual Users
- Total Messages Sent
- Most Active Hours
- Most Used Words/Emojis
- Top Groups by Activity
- Weekly/Monthly Reports
- Activity Heatmap

### For Group Admins
- Top Active Members
- Daily Message Count
- Word Clouds of Group Chat
- Spam Detector / Anomaly Alerts
- Most Reacted-to Messages
- Silent Lurkers List

### Extra Features
- Achievement Badges (e.g., "Night Owl", "Meme Lord", "Reply King")
- Custom Leaderboards
- Year-End Wrapped (animated summary of your chat year)

## Tech Stack
- Node.js
- SQLite (via Sequelize)
- node-telegram-bot-api
- Chart.js for visualizations
- Natural language processing for word analysis

## Setup

1. Clone this repository
   ```bash
   git clone https://github.com/yourusername/StatSpyBot.git
   cd StatSpyBot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with your Telegram Bot Token:
   ```
   BOT_TOKEN=your_bot_token_here
   ```

4. Run the bot:
   - For development:
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm start
     ```

## Bot Commands

### Personal Analytics
- `/start` - Initialize the bot
- `/help` - Show available commands
- `/stats` - View your personal statistics
- `/activity` - See your activity heatmap
- `/words` - View your most used words
- `/emojis` - See your most used emojis

### Group Analytics
- `/groupstats` - View group statistics
- `/topusers` - See most active users
- `/wordcloud` - Generate group word cloud
- `/lurkers` - List inactive members

### Reports
- `/daily` - Get daily report
- `/weekly` - Get weekly report
- `/monthly` - Get monthly report
- `/wrapped` - Get your year in review

### Achievements
- `/achievements` - View your earned badges
- `/leaderboard` - See group rankings

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.

## Contact

For support or queries, contact md.mahin.bd18@gmail.com