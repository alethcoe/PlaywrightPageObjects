// playwright-dev-page.js
const { expect } = require('@playwright/test');

const links = {
  "login": {"text": "Sample App", "url": "http://uitestingplayground.com/sampleapp"},
  "home": {"text": "Home", "url": "http://uitestingplayground.com/home"},
  "scrollbars":{"text": "Scrollbars", "url": "http://uitestingplayground.com/scrollbars"},

};

exports.Navigation = class Navigation {

  constructor(page) {
    this.page = page;
    this.links = links;
  }

  async goto(linkId) {

    if(linkId)
    {
      let link = this.links[linkId];
      await this.page.locator(`text=${link.text}`).click();
      await expect(this.page).toHaveURL(link.url);

    }
    else{
      await this.page.goto('http://uitestingplayground.com/');
    }
    
  }

  async clickLink(linkText){
    await this.page.locator(`text=${linkText}`).click();
  }
    
}