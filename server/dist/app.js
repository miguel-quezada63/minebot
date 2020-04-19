"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protect_bot_1 = require("./protect/protect.bot");
const mineflayer = require("mineflayer");
const bot = mineflayer.createBot({ host: "localhost", port: 58694, username: "Protecter John" });
bot.on("chat", (username, message) => {
    if (username === bot.username)
        return;
    switch (message) {
        case "!protect":
            // Init protect bot, reasoning behind it not being a service is due to it using an instance of a mineflayer bot. If it were a service, it would use instances from a bot class
            const protectBot = new protect_bot_1.ProtectBot(bot, username);
            protectBot.init();
            break;
    }
});
