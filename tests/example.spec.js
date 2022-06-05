const { test, expect } = require('@playwright/test');
// const { HomePage } = require('./pages/home-page');
// const { Login } = require('./pages/login');

const { Navigation } = require('./pages2/navigation');
const { Login } = require('./pages2/login');

test('basic test', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/');
  await page.locator('text=Sample App').click();
  await expect(page).toHaveURL('http://uitestingplayground.com/sampleapp');

  await page.locator('[placeholder="User Name"]').click();
  await page.locator('[placeholder="User Name"]').fill('Jim');
  await page.locator('[placeholder="User Name"]').press('Tab');
  await page.locator('[placeholder="\\*\\*\\*\\*\\*\\*\\*\\*"]').fill('pwd');
  await page.locator('text=Log In').click();

  await page.locator('text=Home').click();
  await expect(page).toHaveURL('http://uitestingplayground.com/home');

  await page.locator('text=Scrollbars').click();
  await expect(page).toHaveURL('http://uitestingplayground.com/scrollbars');
  await page.locator('text=Hiding Button').click();
  await page.locator('h3:has-text("Scrollbars")').click();
});


// test('with page object', async ({page}) =>{
//   const home = new HomePage(page);
//   const login = new Login(page);

//   await home.goto();
//   await home.clickLink('Sample App');
//   await expect(page).toHaveURL('http://uitestingplayground.com/sampleapp');

//   await login.User('Jim', 'pwd');

//   await home.clickLink('Home');
//   await expect(page).toHaveURL('http://uitestingplayground.com/home');

//   await home.clickLink('Scrollbars');
//   await expect(page).toHaveURL('http://uitestingplayground.com/scrollbars')

//   await home.clickLink('Hiding Button');
//   await page.locator('h3:has-text("Scrollbars")').click();
// });

//use object


test('with page object', async ({ page }) => {
  const app = new Navigation(page);
  const login = new Login(page);

  await app.goto();
  await app.goto('login')
  await login.User('Jim', 'pwd');

  await app.goto('home');
  await app.goto('scrollbars');

  await app.clickLink('Hiding Button');
  await page.locator('h3:has-text("Scrollbars")').click();
});


test.describe('Login', () => {

  let app;
  let login;

  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    app = new Navigation(page);
    login = new Login(page);

    await app.goto();
    await app.goto('login')
    await login.User(process.env.USERNAME, process.env.PASSWORD);
  });

  test('Verify Scrollbars', async ({ page }) => {
    await app.goto('home');
    await app.goto('scrollbars');
  
    await app.clickLink('Hiding Button');
    await page.locator('h3:has-text("Scrollbars")').click();
  });
});

// $env:USERNAME="Jim"
// $env:PASSWORD="pwd"
// npx playwright test