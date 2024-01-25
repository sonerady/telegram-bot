const TelegramBot = require("node-telegram-bot-api");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const token = "6398218428:AAH-3gYd7AF1zSIOJ7WxZcEl2NmXX7KiEF0";
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(
    chatId,
    "*Let's get started 🤖*\n\nHow about a glimpse into the AI realm? Discover how it will revolutionize your life!",
    {
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Try it now!",
              web_app: {
                url: "http://ton.hypergpt.ai",
                show: true,
              },
            },
          ],
        ],
      },
    }
  );
});

app.get("/", (req, res) => {
  res.send("Bot is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
