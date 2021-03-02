const puppeteer = require('puppeteer');
const { testing } = require("../js/app");

test('testing is working', () => {
  expect(testing("boom")).toBe("boom");
});

/* add to package.json --detectOpenHandles
test('puppeteer is working', async () => {
  const browser = await puppeteer.launch({
    headless: true
  })
  const page = await browser.newPage();
  await page.goto("file:///Users/dick/Documents/MERN/portfolio/projects/pacMaker/index.html");
  const text = await page.$eval('.portfolio-link', el => el.textContent);
  expect(text).toBe("Portfolio");
});
*/