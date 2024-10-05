import {test, expect} from '@playwright/test';

test.only('Check header', async ({ page }) => {
  const expectedHeaderText = '99 Bottles of Beer';

  await page.goto('https://www.99-bottles-of-beer.net/lyrics.html');//comment

  expect(await page.locator('//h1').innerText()).toEqual(expectedHeaderText)
});
