const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  await page.goto('http://localhost:5173');
  const filePath = path.resolve(__dirname, 'public/preview.png');
  await page.screenshot({ path: filePath });
  console.log('Preview générée :', filePath);
  await browser.close();
})();