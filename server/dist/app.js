"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mineflayer = require("mineflayer");
const app_service_1 = require("./app.service");
const appBot = mineflayer.createBot({ host: "localhost", port: 25565, username: "AppBot" });
const app = new app_service_1.AppService();
appBot.on("chat", async (username, message) => {
    if (username === appBot.username)
        return;
    switch (message) {
        case "!protect":
            // Init protect bot, reasoning behind it not being a service is due to it using an instance of a mineflayer bot. If it were a service, 
            // it would use instances from a bot class
            if (!app.isProtectActive) {
                const bot = mineflayer.createBot({ host: "localhost", port: 25565, username: "Protect" });
                app.initProtect(bot, username, appBot);
            }
            else {
                appBot.chat("Protect bot already active. Please use additive commands for the bot.");
            }
            break;
    }
});
