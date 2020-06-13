const assert = require('assert');
const { Given, When, Then, AfterAll } = require('cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const { loginPageObjects } = require('../pages_objects/LoginPage');
const { homePageObjects } = require('../pages_objects/HomePage');

let driver = new Builder().forBrowser('chrome').build();

Given('I want to login on tha vacations platform', async function() {
    await driver.get(loginPageObjects.homePageUrl);

});

When('I enter my user {string} and password {string}', async function(user, password) {
    await driver.findElement(By.id(loginPageObjects.username)).sendKeys(user);
    await driver.findElement(By.id(loginPageObjects.password)).sendKeys(password);
    await driver.findElement(By.css(loginPageObjects.submitBtn)).click();    
});

Then('I should see that {string}', async function(expectedMessage) {

  let messageFieldObject = await driver.findElement(By.css(homePageObjects.bannerLoginSuccessful));
  await driver.wait(until.elementIsVisible(messageFieldObject),1000);
  let actualResult = await messageFieldObject.getText();
  assert.equal(actualResult, expectedMessage);
    
});

AfterAll( async function(){
    await driver.quit();
});
