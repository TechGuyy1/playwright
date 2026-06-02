const { test, expect } = require('@playwright/test');

test('basic test example', async ({ page }) => {
    /* In JavaScript, an async function is used to write asynchronous, promise-based code in a cleaner,
    more synchronous-looking style. The async keyword allows for the use of the await keyword within the function body, which pauses the function's execution until a Promise is settled
   */
    // Navigate to a webpage
  await page.goto('https://example.com');
  
  // Check the page title
  const title = await page.title();
  page.toBeVisible
  console.log('Page title:', title);
  expect(title).toBe('Example Domain');
  
  // Interact with elements
  await page.click('text=Learn more');
  
  // Assert something after interaction
  expect(page.url()).toContain('iana.org');
});

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="login-button"]').click();
  await page.locator('svg').first().click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').press('ControlOrMeta+V');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').press('ControlOrMeta+V');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('tEST');
  await page.locator('[data-test="firstName"]').press('Tab');
  await page.locator('[data-test="lastName"]').fill('LASTNAME');
  await page.locator('[data-test="lastName"]').press('Tab');
  await page.locator('[data-test="postalCode"]').fill('12345');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await page.locator('[data-test="complete-header"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await expect(page.locator('[data-test="item-4-img-link"]')).toBeVisible();
  await page.getByText('$29.99').click();
  await expect(page.locator('[data-test="item-4-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');
  await page.locator('[data-test="item-4-img-link"]').click();
  await expect(page.locator('[data-test="inventory_item_name"]')).toContainText('Sauce Labs Backpack');
});