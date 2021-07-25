"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PitcherScore = void 0;
class PitcherScore {
    constructor(list) {
        this.era = list[0];
        this.games = list[1];
        this.completeGames = list[2];
        this.shutouts = list[3];
        this.win = list[4];
        this.losses = list[5];
        this.saves = list[6];
        this.inningsPitched = list[7];
        this.hits = list[8];
        this.homeRuns = list[9];
        this.strikeouts = list[10];
        this.basesOnBalles = list[11];
        this.hitsBatsmen = list[12];
        this.ring = list[13];
        this.bok = list[14];
        this.runs = list[15];
        this.earnedRuns = list[16];
    }
}
exports.PitcherScore = PitcherScore;
//# sourceMappingURL=pitcher_score.js.map