"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protect_bot_1 = require("./protect/protect.bot");
class AppService {
    constructor() {
        this.protectBot = { bot: null, active: false };
    }
    initProtect(bot, username, appBot) {
        const instance = new protect_bot_1.ProtectBot(bot, username, appBot);
        this.activateBot(this.protectBot, instance);
    }
    activateBot(ref, instance) {
        ref.active = true;
        ref.bot = instance;
        instance.init();
    }
    get isProtectActive() {
        return this.protectBot.active;
    }
}
exports.AppService = AppService;
