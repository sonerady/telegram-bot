const TelegramBot = require("node-telegram-bot-api");
const express = require("express");
const app = express();
const PORT = process.env.port || 8080;

const token = "6733698418:AAFIT5ewZPDGXVoAuDmnJUqnmjd6DkqKIjc";
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const userId = msg.from.id;
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
                url: `https://ton.hypergpt.ai/?telegram_uid=${userId}&telegram_chat_id=${chatId}&telegram_first_name=${msg.from.first_name}&telegram_last_name=${msg.from.last_name}&telegram_username=${msg.from.username}&telegram_photo=${msg.from.photo}`,
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
