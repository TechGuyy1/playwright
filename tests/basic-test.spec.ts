import { test, expect } from '@playwright/test';

test('basic test example', async ({ page }) => {
  // Navigate to a webpage
  await page.goto('https://example.com');
  
  // Check the page title
  const title = await page.title();
  expect(title).toBe('Example Domain');
  
  // Interact with elements
  await page.click('text=Learn more');
  
  // Assert something after interaction
  expect(page.url()).toContain('iana.org');
});