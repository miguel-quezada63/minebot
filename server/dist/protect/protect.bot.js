"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tracking_service_1 = require("../tracking/tracking.service");
const player_service_1 = require("../player/player.service");
class ProtectBot {
    constructor(bot, username) {
        this.bot = bot;
        this.username = username;
        this.trackingService = new tracking_service_1.TrackingService(this.bot, this.username);
        this.playerService = new player_service_1.PlayerService();
    }
    init() {
        // Get player data
        const player = this.playerService.getPlayer(this.username, this.bot);
        // If no player with the specified username exists, return an error as a message to the chat
        if (player === null) {
            this.bot.chat("No player found!");
        }
        else {
            // Else, begin tracking player movements
            this.trackingService.startTracking();
        }
    }
}
exports.ProtectBot = ProtectBot;
