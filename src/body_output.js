const puppeteer = require("puppeteer");
const url = 'https://baseball.yahoo.co.jp/mlb/teams/player/pitcher/727378';
const scoreTitleElement = '.yjSMTseasonsscore > table > tbody > tr[class="ttl"] > th';
const scoreElement = '.yjSMTseasonsscore > table > tbody > tr:not([class]) > td';

const SCORE_TITLE_LIST = async (page) => {
  return await page.$$eval(scoreTitleElement, thList => {
    const scoreTitleList = thList
      .map(th => th.textContent)
      .filter(elm => elm != '年' && elm != 'チーム')
    const pitcherScoreTitleList = scoreTitleList.slice(0, 16)
    const hitterScoreTitleList = scoreTitleList.slice(17, 34)
    return [pitcherScoreTitleList, hitterScoreTitleList]
  });
};

const SCORE_LIST = async (page) => {
  return await page.$$eval(scoreElement, thList => {
    const scoreList = thList
      .map(th => th.textContent)
      .filter(elm => elm != 'エンゼルス')
    const pitcher2021ScoreList = scoreList.slice(0, 16)
    const pitcher2020ScoreList = scoreList.slice(17, 33)
    const pitcher2018ScoreList = scoreList.slice(34, 50)
    const hitterScore2021List = scoreList.slice(51, 68)
    const hitterScore2020List = scoreList.slice(69, 86)
    const hitterScore2019List = scoreList.slice(87, 104)
    const hitterScore2018List = scoreList.slice(105, 122)
    return [
      [
        pitcher2021ScoreList, pitcher2020ScoreList, pitcher2018ScoreList
      ],
      [
        hitterScore2021List, hitterScore2020List, hitterScore2019List, hitterScore2018List
      ]
    ]
  });
};

const PITCHER_SCORE_LIST = async (page) => {
  return await page.$$eval(scoreElement, thList => {
    const scoreList = thList
      .map(th => th.textContent)
      .filter(elm => elm != 'エンゼルス')
    const pitcher2021ScoreList = scoreList.slice(0, 16)
    const pitcher2020ScoreList = scoreList.slice(17, 33)
    const pitcher2018ScoreList = scoreList.slice(34, 50)
    const hitterScore2021List = scoreList.slice(51, 68)
    const hitterScore2020List = scoreList.slice(69, 86)
    const hitterScore2019List = scoreList.slice(87, 104)
    const hitterScore2018List = scoreList.slice(105, 122)
    return [
      [
        pitcher2021ScoreList, pitcher2020ScoreList, pitcher2018ScoreList
      ],
      [
        hitterScore2021List, hitterScore2020List, hitterScore2019List, hitterScore2018List
      ]
    ]
  });
};

puppeteer.launch().then(async (browser) => {
  const page = await browser.newPage();
  await page.goto(url);
  const titleList = await SCORE_TITLE_LIST(page);
  const scoreList = await SCORE_LIST(page);
  const aaaa = scoreList[0].map(yearScoreList => {
    const pitcherTitleList = titleList[0]
    var scores = {}
    yearScoreList.forEach((score, index) => {
      scores[pitcherTitleList[index]] = score
    })
    return scores
  })
  await console.log(aaaa);
  browser.close();
});

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}