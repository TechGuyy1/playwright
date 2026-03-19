import { test, expect } from '@playwright/test';

test('Login Functionality- User is able to login successfully', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Swag Labs/);
  // expect(page).toBe("/Playwright/");
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  const menu = page.locator('nav');
   const menuLinks = menu.locator('a');
   const menuTexts = await menuLinks.allInnerTexts();
   console.log('Menu texts:', menuTexts);
   if(menuTexts.includes('Products')){
    console.log('Products link is present');
   }else{
    console.log('Products link is not present');
   }


});