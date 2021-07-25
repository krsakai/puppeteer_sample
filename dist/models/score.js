"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Score = void 0;
const pitcher_score_1 = require("./pitcher_score");
const hitter_score_1 = require("./hitter_score");
__exportStar(require("./pitcher_score"), exports);
__exportStar(require("./hitter_score"), exports);
class Score {
    static async pitcherTitleList(page, target) {
        return await page.$$eval(target, (thList) => {
            console.log("");
            const scoreTitleList = thList.map((th) => th.textContent).filter((elm) => elm != "年" && elm != "チーム");
            console.log("");
            return scoreTitleList.slice(0, 16).removeNull();
        });
    }
    static async hitterTitleList(page, target) {
        return await page.$$eval(target, (thList) => {
            const scoreTitleList = thList.map((th) => th.textContent).filter((elm) => elm != "年" && elm != "チーム");
            return scoreTitleList.slice(17, 34).removeNull();
        });
    }
    static async pitcherScoreList(page, target) {
        return await page.$$eval(target, (thList) => {
            const scoreList = thList.map((th) => th.textContent).filter((elm) => elm != "エンゼルス");
            return [
                new pitcher_score_1.PitcherScore(scoreList.slice(0, 17), "2021"),
                new pitcher_score_1.PitcherScore(scoreList.slice(17, 34), "2020"),
                new pitcher_score_1.PitcherScore(scoreList.slice(34, 51), "2018")
            ];
        });
    }
    static async hitterScoreList(page, target) {
        return await page.$$eval(target, (thList) => {
            const scoreList = thList.map((th) => th.textContent).filter((elm) => elm != "エンゼルス");
            return [
                new hitter_score_1.HitterScore(scoreList.slice(51, 69), "2021"),
                new hitter_score_1.HitterScore(scoreList.slice(69, 87), "2020"),
                new hitter_score_1.HitterScore(scoreList.slice(87, 105), "2019"),
                new hitter_score_1.HitterScore(scoreList.slice(105, 123), "2018")
            ];
        });
    }
}
exports.Score = Score;
//# sourceMappingURL=score.js.map