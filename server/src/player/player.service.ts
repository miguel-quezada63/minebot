import { mapToArray } from "../util/map-to-arr.util";

export class PlayerService {
    getPlayer(username, bot) {
        // Get all players in lobby
        const players = mapToArray(bot.players);
        // Return player with the matching username
        return players.find(player => username === player.username);
    }
}