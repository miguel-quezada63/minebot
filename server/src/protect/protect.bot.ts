import { TrackingService } from "../tracking/tracking.service";
import { PlayerService } from "../player/player.service";
import { MineBot } from "../bot/minebot.bot";
import { TeleportService } from "../teleport/teleport.service";
export class ProtectBot extends MineBot {
    private readonly trackingService: TrackingService;
    private readonly playerService: PlayerService;
    private readonly teleportService: TeleportService;
    constructor(bot, username: string, app) {
        super(bot, username, app);
        this.trackingService = new TrackingService(this.bot, this.username);
        this.playerService = new PlayerService();
        this.teleportService = new TeleportService();
    }

    init() {
        // Get player data
        const player = this.playerService.getPlayer(this.username, this.app);
        // this.teleportService.tpToPlayer(this.bot, this.username);
        // If no player with the specified username exists, return an error as a message to the chat
        if (player === null) {
            this.bot.chat("No player found!")
        } else {
            this.teleportService.tpToPlayer(this.app, "Protect", this.username);
            // Else, begin tracking player movements
            this.trackingService.startTracking();
        }
    }

}