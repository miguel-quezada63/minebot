"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TeleportService {
    tpToPlayer(bot, botUsername, username) {
        bot.chat(`/tp ${botUsername} ${username}`);
    }
}
exports.TeleportService = TeleportService;
