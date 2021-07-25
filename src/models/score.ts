import { Browser } from "puppeteer";
import { Page } from "puppeteer";
import { PitcherScore } from './pitcher_score';
import { HitterScore } from './hitter_score';
import '../extensions/array.extension';

export * from './pitcher_score';
export * from './hitter_score';

export class Score {
  static pitcherTitleList = async (page: Page, target: string) => {
    return await page.$$eval(target, (thList) => {
      const titleList = thList.map((th) => th.textContent).filter((elm) => elm != "年" && elm != "チーム");
      return titleList.slice(0, 16);
    })
  }

  static hitterTitleList = async (page: Page, target: string) => {
    return await page.$$eval(target, (thList) => {
      const titleList = thList.map((th) => th.textContent).filter((elm) => elm != "年" && elm != "チーム");
      return titleList.slice(17, 34);
    })
  }

  static pitcherScoreList = async (page: Page, target: string) => {
    return await page.$$eval(target, (thList) => {
      const scoreList = thList.map((th) => th.textContent).filter((elm) => elm != "エンゼルス");
      return [
        // new PitcherScore(scoreList.slice(0, 17), "2021"),
        // new PitcherScore(scoreList.slice(17, 34), "2020"),
        // new PitcherScore(scoreList.slice(34, 51), "2018")
      ]
    });
  }

  static hitterScoreList = async (page: Page, target: string) => {
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

