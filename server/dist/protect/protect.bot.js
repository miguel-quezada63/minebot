"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tracking_service_1 = require("../tracking/tracking.service");
const player_service_1 = require("../player/player.service");
const minebot_bot_1 = require("../bot/minebot.bot");
const teleport_service_1 = require("../teleport/teleport.service");
class ProtectBot extends minebot_bot_1.MineBot {
    constructor(bot, username, app) {
        super(bot, username, app);
        this.trackingService = new tracking_service_1.TrackingService(this.bot, this.username);
        this.playerService = new player_service_1.PlayerService();
        this.teleportService = new teleport_service_1.TeleportService();
    }
    init() {
        // Get player data
        const player = this.playerService.getPlayer(this.username, this.app);
        // this.teleportService.tpToPlayer(this.bot, this.username);
        // If no player with the specified username exists, return an error as a message to the chat
        if (player === null) {
            this.bot.chat("No player found!");
        }
        else {
            this.teleportService.tpToPlayer(this.app, "Protect", this.username);
            // Else, begin tracking player movements
            this.trackingService.startTracking();
        }
    }
}
exports.ProtectBot = ProtectBot;
