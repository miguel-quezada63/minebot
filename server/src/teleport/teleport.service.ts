export class TeleportService {
    tpToPlayer(bot, botUsername, username) {
        bot.chat(`/tp ${botUsername} ${username}`);
    }
}