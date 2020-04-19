"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const map_to_arr_util_1 = require("../util/map-to-arr.util");
class PlayerService {
    getPlayer(username, bot) {
        // Get all players in lobby
        const players = map_to_arr_util_1.mapToArray(bot.players);
        // Return player with the matching username
        return players.find(player => username === player.username);
    }
}
exports.PlayerService = PlayerService;
