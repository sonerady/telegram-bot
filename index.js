const TelegramBot = require("node-telegram-bot-api");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
const TOKEN = "6398218428:AAH-3gYd7AF1zSIOJ7WxZcEl2NmXX7KiEF0"; // Ortam değişkeni olarak token'i sakla

const bot = new TelegramBot(TOKEN);

// Telegram'dan gelen POST taleplerini işlemek için bir endpoint
app.post("/" + TOKEN, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

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
                url: "https://telegram-k56byvvqc-soners-projects.vercel.app/",
                show: true,
              },
            },
          ],
        ],
      },
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Sunucunuzun dışa açık adresini burada belirtmelisiniz.
const externalUrl = "https://naughty-pig-top-coat.cyclic.app";
bot.setWebHook(`${externalUrl}/${TOKEN}`);
