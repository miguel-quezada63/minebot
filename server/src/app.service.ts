import { BotData } from "./interfaces/bot-data.interface";
import { ProtectBot } from "./protect/protect.bot";
export class AppService {
    private protectBot: BotData = { bot: null, active: false };

    initProtect(bot, username, appBot) {
        const instance = new ProtectBot(bot, username, appBot);
        this.activateBot(this.protectBot, instance);
    }

    private activateBot(ref, instance) {
        ref.active = true;
        ref.bot = instance;
        instance.init();
    }

    get isProtectActive() {
        return this.protectBot.active;
    }
}