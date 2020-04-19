"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const position_service_1 = require("../position/position.service");
class TrackingService {
    constructor(bot, username) {
        this.bot = bot;
        this.username = username;
        this.positionService = new position_service_1.PositionService();
    }
    startTracking() {
        // Check to see if player has moved, if so, begin to move towards player
        this.bot.on("entityMoved", (entity) => {
            if (entity.username === this.username) {
                this.moveToPlayer(entity);
            }
        });
    }
    moveToPlayer(player) {
        const [playerPos, botPos] = [player.position, this.bot.entity.position];
        // Direct bot to look at player 
        this.lookAtPlayer(playerPos);
        // Move bot to player
        this.bot.setControlState("forward", true);
        // Calc position difference between player and bot
        const positionDif = this.positionService.get3dPosition(botPos, playerPos);
        // If bot is within a 5 unit radius, stop bot from moving
        const yDiff = this.positionService.get1dPosition(botPos, playerPos, "y");
        if (this.positionService.get1dPosition(botPos, playerPos, "y") >= 1 && this.positionService.get1dPosition(botPos, playerPos, "y") < 2) {
            this.bot.setControlState("jump", true);
            setInterval(() => { this.bot.setControlState("jump", false); }, 100);
        }
        if (positionDif <= 5) {
            this.bot.setControlState("forward", false);
        }
    }
    // Direct the bot to look at a 3d point
    lookAtPlayer(position) {
        return this.bot.lookAt(position);
    }
}
exports.TrackingService = TrackingService;
