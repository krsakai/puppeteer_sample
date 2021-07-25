import { Page } from "puppeteer";
import { PitcherScore } from './pitcher_score';
import { HitterScore } from './hitter_score';
// import '../extensions/array.extension';

export * from './pitcher_score';
export * from './hitter_score';

export class Score {
  static async pitcherTitleList(page: Page, target: string): Promise<string[]> {
    return await page.$$eval(target, (thList) => {
      console.log("");
      const scoreTitleList: (string| null)[] = thList.map((th) => th.textContent).filter((elm) => elm != "年" && elm != "チーム");
      console.log("");
      return scoreTitleList.slice(0, 16).removeNull();
    })
  }

  static async hitterTitleList(page: Page, target: string): Promise<string[]> {
    return await page.$$eval(target, (thList) => {
      const scoreTitleList = thList.map((th) => th.textContent).filter((elm) => elm != "年" && elm != "チーム");
      return scoreTitleList.slice(17, 34).removeNull();
    })
  }

  static async pitcherScoreList(page: Page, target: string): Promise<PitcherScore[]> {
    return await page.$$eval(target, (thList) => {
      const scoreList = thList.map((th) => th.textContent).filter((elm) => elm != "エンゼルス");
      return [
        new PitcherScore(scoreList.slice(0, 17), "2021"),
        new PitcherScore(scoreList.slice(17, 34), "2020"),
        new PitcherScore(scoreList.slice(34, 51), "2018")
      ]
    });
  }

  static async hitterScoreList(page: Page, target: string): Promise<HitterScore[]> {
    return await page.$$eval(target, (thList) => {
      const scoreList = thList.map((th) => th.textContent).filter((elm) => elm != "エンゼルス");
      return [
        new HitterScore(scoreList.slice(51, 69), "2021"),
        new HitterScore(scoreList.slice(69, 87), "2020"),
        new HitterScore(scoreList.slice(87, 105), "2019"),
        new HitterScore(scoreList.slice(105, 123), "2018")
      ]
    });
  }
}

