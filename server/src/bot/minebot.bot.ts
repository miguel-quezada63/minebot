// Parent class for all bots
export class MineBot {
    protected username: string;
    protected bot;
    protected app;
    constructor(bot, username: string, app) {
        this.bot = bot;
        this.username = username;
        this.app = app;
    }
}