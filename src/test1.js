const puppeteer = require('puppeteer');
 
puppeteer.launch({
  headless: false,
  slowMo: 100 // 遅延時間
}).then(async browser => {
  const page = await browser.newPage();
  await page.goto('https://www.google.co.jp/');
  await page.type('[name="q"]', 'new date');
  await page.waitForTimeout(100);
  await page.click('[type="submit"]');
  await page.waitForNavigation();
  await page.screenshot({path: 'screenshot.png'});
  browser.close();
});
