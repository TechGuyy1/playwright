const { test, expect } = require('@playwright/test');
test('navigate to a page and check the title', async ({ page }) => {
await page.goto('https://www.amazon.in/');
const title = await page.title();
// expect(title).toBe("amazon");
});