import { TrackingService } from "../tracking/tracking.service";
import { PlayerService } from "../player/player.service";

export class ProtectBot {
    private username: string;
    private bot;
    private trackingService: TrackingService;
    private playerService: PlayerService;
    constructor(bot, username) {
        this.bot = bot;
        this.username = username;
        this.trackingService = new TrackingService(this.bot, this.username);
        this.playerService = new PlayerService();
    }

    init() {
        // Get player data
        const player = this.playerService.getPlayer(this.username, this.bot);
        // If no player with the specified username exists, return an error as a message to the chat
        if (player === null) {
            this.bot.chat("No player found!")
        } else {
            // Else, begin tracking player movements
            this.trackingService.startTracking();
        }
    }

}