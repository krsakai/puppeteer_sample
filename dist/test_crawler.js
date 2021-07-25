"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const score_1 = require("./models/score");
const base_crawler_1 = require("./base_crawler");
const url = "https://baseball.yahoo.co.jp/mlb/teams/player/pitcher/727378";
const scoreTitleTarget = '.yjSMTseasonsscore > table > tbody > tr[class="ttl"] > th';
const scoreTarget = ".yjSMTseasonsscore > table > tbody > tr:not([class]) > td";
class TestCrawler extends base_crawler_1.BaseCrawler {
    async crawl(_, page) {
        await page.goto(url);
        const pitcherTitleList = await score_1.Score.pitcherTitleList(page, scoreTitleTarget);
        await console.log(pitcherTitleList);
        print();
    }
}
exports.default = TestCrawler;
(async () => {
    const crawler = new TestCrawler();
    await crawler.run();
})();
//# sourceMappingURL=test_crawler.js.map