const { expect } = require('@playwright/test');

exports.Login = class Login {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.userName = page.locator('[placeholder="User Name"]');
    this.password = page.locator('[placeholder="\\*\\*\\*\\*\\*\\*\\*\\*"]');
    this.login = page.locator('text=Log In');

  }

  async User(name, pw) {
    await this.userName.click();
    await this.userName.fill(name);
    await this.userName.press('Tab');
    await this.password.fill(pw);
    await this.login.click();
  }

}