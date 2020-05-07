import { MineBot } from "../bot/minebot.bot";

export interface BotData {
    bot: MineBot | null;
    active: boolean;
}