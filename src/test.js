const puppeteer = require('puppeteer');
 
puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
  await page.goto('https://www.google.co.jp/');
  await page.screenshot({path: 'screenshot.png'});
  browser.close();
});
