// playwright-dev-page.js
const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {

  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('http://uitestingplayground.com/');
  }

  async clickLink(linkText){
    await this.page.locator(`text=${linkText}`).click();
  }
    
}