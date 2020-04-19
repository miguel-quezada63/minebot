import { ProtectBot } from "./protect/protect.bot";
import * as mineflayer from "mineflayer";
const bot = mineflayer.createBot({ host: "localhost", port: 58694, username: "Protecter John" });

bot.on("chat", (username, message) => {
    if (username === bot.username) return;
    switch (message) {
        case "!protect":
            // Init protect bot, reasoning behind it not being a service is due to it using an instance of a mineflayer bot. If it were a service, it would use instances from a bot class
            const protectBot = new ProtectBot(bot, username);
            protectBot.init();
            break;
    }
})