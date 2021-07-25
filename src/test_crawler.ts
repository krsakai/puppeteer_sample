import { Browser } from "puppeteer";
import { Page } from "puppeteer";
// import './extensions/array.extension';
import { Score, PitcherScore, HitterScore } from './models/score';
import { BaseCrawler } from "./base_crawler";

const url = "https://baseball.yahoo.co.jp/mlb/teams/player/pitcher/727378";
const scoreTitleTarget = '.yjSMTseasonsscore > table > tbody > tr[class="ttl"] > th';
const scoreTarget = ".yjSMTseasonsscore > table > tbody > tr:not([class]) > td";

export default class TestCrawler extends BaseCrawler {
  protected async crawl(_: Browser, page: Page) {
    await page.goto(url);
    const pitcherTitleList = await Score.pitcherTitleList(page, scoreTitleTarget);
    // const hitterTitleList = await Score.hitterTitleList(page, scoreTitleTarget);
    // const pitcherScoreList = await Score.pitcherScoreList(page, scoreTarget);
    // const hitterScoreList = await Score.hitterScoreList(page, scoreTarget);
    await console.log(pitcherTitleList);
    print();
  }
}

(async () => {
  const crawler = new TestCrawler();
  await crawler.run();
})();