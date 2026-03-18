import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  // expect(page).toBe("/Playwright/");
  const menu = page.locator('nav');
   const menuLinks = menu.locator('a');
   const menuTexts = await menuLinks.allInnerTexts();
   console.log('Menu texts:', menuTexts);
   // Assert that certain links are present
   expect(menuTexts).toContain('Docs');
   expect(menuTexts).toContain('API');

});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();


  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('has Writing tests link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  const getStartedLink = page.getByRole('link', { name: 'Get started' });
  await expect(getStartedLink).toBeVisible();
  await getStartedLink.click();
  await page.locator('.menu__link[href="/docs/writing-tests"]').click();


});

