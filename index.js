const TelegramBot = require("node-telegram-bot-api");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const token = "6007696777:AAH0iVdHOpbr28RoD4PayhZdEsR0ZFQpc8A";
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
                url: `https://telegram-app-virid.vercel.app/?telegram_uid=${userId}&telegram_chat_id=${chatId}&telegram_first_name=${msg.from.first_name}&telegram_last_name=${msg.from.last_name}&telegram_username=${msg.from.username}&telegram_photo=${msg.from.photo}`,
                show: true,
              },
            },
          ],
        ],
      },
    }
  );
});

// bot.onText(/\/login/, async (msg) => {
//   const chatId = msg.chat.id;
//   const userId = msg.from.id; // Kullanıcı ID'sini al

//   try {
//     // API'ye POST isteği gönder
//     bot.sendMessage(chatId, `Here is your login link:) ${userId}`, {
//       parse_mode: "Markdown",
//     });
//   } catch (error) {
//     bot.sendMessage(chatId, "Error occurred during login. Please try again.");
//   }
// });

app.get("/", (req, res) => {
  res.send("Bot is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
