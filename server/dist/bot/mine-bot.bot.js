"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Minebot {
    static createBot(mineflayer, username) {
        return mineflayer.createBot({ host: "localhost", port: 58694, username });
    }
}
exports.Minebot = Minebot;
